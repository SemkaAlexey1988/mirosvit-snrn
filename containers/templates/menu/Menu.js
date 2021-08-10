    import React from 'react';
    import {connect} from 'react-redux';
    import { bindActionCreators } from 'redux';

    import {fetchMenus} from '../../../store/actions/menus/menus'
    import MenuInfo from '../../../components/templates/menu/MenuInfo'
    import Error from '../../../components/templates/error'
    import Loader from '../../../components/templates/loader'
    
    class Menu extends React.Component {

        componentDidMount(){
          this.props.fetchMenus();
        }
             
        render() {
          const stateValue = this.props.reduxData
          const successData = !(stateValue.load || stateValue.error)
          const errorBlock = stateValue.error ? <Error/> : null
          const loader = stateValue.load ? <Loader/> : null
          const content = <MenuInfo menus={this.props.reduxData.data} />
          return(
            <React.Fragment>
                  {errorBlock}  
                  {loader}
                  {content} 
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