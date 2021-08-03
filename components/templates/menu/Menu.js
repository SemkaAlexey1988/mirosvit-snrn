
    
    import React from 'react';
    import {connect} from 'react-redux';
    import {fetchMenus} from '../../../store/actions/menus/menus'
    import { bindActionCreators } from 'redux';
    import Link from 'next/link'
    
    class Menu extends React.Component {
  
    
        constructor(props) {
            super(props);
        }

        componentDidMount(){
          this.props.fetchMenus();
          }
    
        
        render() {

          return(
            <React.Fragment>
           <ul className="main-menu">
           {  this.props.reduxData.data.map((item, index) => (
           <li key={index}>
           <Link href={`/posts/[id]`} as={`/posts/${item.link}`}><a>{item.name}</a></Link>
           </li>
            ))   }
            </ul>
            </React.Fragment>  
          );
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