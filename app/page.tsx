"use client" 
import Body from '../components/Body';    
import 'swiper/css'; 
  
 


export default   function Home() {
 

  return (
    <>
      <meta
    content="Abbas Baba"
    name=""
    property="og:title"
  />
  <meta
    content="https://abbasbaba.com/"
    name=""
    property="og:url"
  />
  <meta content="website" name="" property="og:type" />
  <meta
    content="At Abbas Baba, we're reshaping the way businesses connect."
    name=""
    property="og:description"
  />
  <meta
    content="/logo.png"
    name=""
    property="og:image"
  />

<main  className="overflow-hidden"> 
      <Body/> 
    </main>
    </>

  )
}


