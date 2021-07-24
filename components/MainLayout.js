import Link from 'next/link'
import Head from 'next/head'

export function MainLayout({children, title}) {
return <div>
 <Head>
<title>{title}</title>     
</Head>   
<header>
<p>Test</p> 
<ul className="menu-main">
<li><Link href={'/'}><a>Main</a></Link></li>
<li><Link href={'/about'}><a>About</a></Link></li>
<li><Link href={'/posts'}><a>Posts</a></Link></li>
</ul>   
</header>
<main>
{children}    
</main>
<footer></footer>
<style jsx global> {` 
.menu-main li {    
display: inline-block;
padding-left: 10px;
}
`}
</style>
</div>   



}

