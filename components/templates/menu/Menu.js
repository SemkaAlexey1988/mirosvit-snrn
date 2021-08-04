    import React from 'react';
    import {connect} from 'react-redux';
    import {fetchMenus} from '../../../store/actions/menus/menus'
    import { bindActionCreators } from 'redux';
    import Link from 'next/link'
    
    class Menu extends React.Component {
  
        constructor(props) {
          super(props);
          this.state = {
            currentId: 0, 
            currentChildId: 0
          };
        }

        componentDidMount(){
          this.props.fetchMenus();
        }

        toggleOver = (id) => { 
          this.setState({ 
          currentId: id
          });
        }
        
        toggleOut = () => { 
          this.setState({ 
          currentId: 0
          });
        }
        
        toggleChildOver = (id) => { 
          this.setState({ 
          currentChildId: id
          });
        }
        
        toggleChildOut = () => { 
          this.setState({ 
          currentChildId: 0
          });
        }  
    
        
        render() {
          const { currentId, currentChildId } = this.state;
          return(
            <React.Fragment>
            <ul className="main-menu">
        
              {this.props.reduxData.data.map((item) => {
        
        if(item.child){
        
              return <li key={item.id} onMouseOut={this.toggleOut.bind(this, item.id)} onMouseOver={this.toggleOver.bind(this, item.id)}>
              <Link href={`${item.link}`} as={`${item.link}`} ><a>{item.name}</a></Link>
              <ul className={currentId === item.id  ? `sub-menu show` : `sub-menu` }>
              {item.child.map(itemChild => {
                if(itemChild.child){
                  return  <li key={itemChild.id} id={item.id} onMouseOut={this.toggleChildOut.bind(this, itemChild.id)} onMouseOver={this.toggleChildOver.bind(this, itemChild.id)}>
                  <Link href={`${itemChild.link}`} as={`${itemChild.link}`}><a>{itemChild.name}</a></Link>
                  <ul className={currentChildId === itemChild.id  ? `sub-menu show` : `sub-menu` }>
                  {itemChild.child.map(itemChildSecond => {
                   return <li key={itemChildSecond.id} id={itemChildSecond.id}>
                  <Link href={`${itemChildSecond.link}`} as={`${itemChildSecond.link}`}><a>{itemChildSecond.name}</a></Link>
                  </li>
                  })}
                  </ul>
                  </li>
                }else{
                  return  <li key={itemChild.id} id={item.id}>
                  <Link href={`${itemChild.link}`} as={`${itemChild.link}`}><a>{itemChild.name}</a></Link>
                  </li>
                }
      
              })}
              </ul>
              </li>  
                  
        }else{
        
              return <li key={item.id}>
              <Link href={`${item.link}`} as={`${item.link}`}><a>{item.name}</a></Link>
              </li> 
        
        }          
             
              })
              }
            </ul>
            </React.Fragment>
            ) 


        }
    }
    
    const mapStateToProps = ({menus}) => ({
      reduxData: menus
    });
    
    const mapDispatchToProps = (dispatch) => {
      return {
      fetchMenus: bindActionCreators(fetchMenus, dispatch)
      }
    };
    
    export default connect(mapStateToProps, mapDispatchToProps)(Menu);
    
    
    
    
       






/*
import React, {useState} from 'react';
import Link from 'next/link'

const Menu = ({}) => {
  return(
    <div className="menu-wrapper">
      <ul className="menu-main">
        <li><Link href={'/'}><a>Main</a></Link></li>
        <li><Link href={'/about'}><a>About</a></Link></li>
        <li><Link href={'/posts'}><a>Posts</a></Link></li>
      </ul> 
    </div>
  )
}

export default Menu
*/