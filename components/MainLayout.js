import Link from 'next/link'
import Head from 'next/head'
import Footer from './templates/footer'
import Header from './templates/header'


export function MainLayout({children, title}) {
return <div className="site">
<div className="content">
 <Head>
<title>{title}</title>     
</Head>  
<Header/> 
<main>
{children}    
</main>
<Footer/>
<style jsx global> {` 
.menu-main li {    
display: inline-block;
padding-left: 10px;
}
`}
</style>
</div>   
</div> 

}

