    import React from 'react';
    import Link from 'next/link'
    
    export default class MenuInfo extends React.Component {
  
        constructor(props) {
          super(props);
          this.state = {
            currentId: 0, 
            currentChildId: 0
          };
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
          let pw
          if (typeof window !== 'undefined') {
          pw = window.innerWidth
          }
          const { currentId, currentChildId } = this.state;
          if(pw > 1000){
          return(
            <ul className="main-menu">
              {this.props.menus.map((item) => {
        
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
            ) 
      }else{

        return(
          <ul className="main-menu">
            {this.props.menus.map((item) => {
      
      if(item.child){
      
            return <li key={item.id}>
            <Link href={`${item.link}`} as={`${item.link}`} ><a>{item.name}</a></Link>
            <i className={currentId === item.id  ? 'fas fa-caret-down hide' : 'fas fa-caret-down'} onClick={this.toggleOver.bind(this, item.id)} ></i>
            <i className={currentId === item.id  ? 'fas fa-caret-up' : 'fas fa-caret-up hide' } onClick={this.toggleOut.bind(this, item.id)}></i>
            <ul className={currentId === item.id  ? `sub-menu show` : `sub-menu` }>
            {item.child.map(itemChild => {
              if(itemChild.child){
                return  <li key={itemChild.id} id={itemChild.id}>
                <Link href={`${itemChild.link}`} as={`${itemChild.link}`}><a>{itemChild.name}</a></Link>
                <i className={currentChildId === itemChild.id  ? 'fas fa-caret-down hide' : 'fas fa-caret-down'} onClick={this.toggleChildOver.bind(this, itemChild.id)} ></i>
                <i className={currentChildId === itemChild.id  ? 'fas fa-caret-up' : 'fas fa-caret-up hide' } onClick={this.toggleChildOut.bind(this, itemChild.id)}></i>
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
          ) 

      }

        }
    }
    
    
  