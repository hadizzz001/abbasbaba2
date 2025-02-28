"use client"
import {  Footer,Navbar2 } from '../components'
import './globals.css'
import './custom.css'
import './bootstrap.min.css'
import './bs-select.css'
import './slick.css'
import { useSearchParams } from 'next/navigation'
import { CartProvider } from './context/CartContext';
import { BooleanProvider } from './context/CartBoolContext'; 
import GifLoader from '../components/GifLoader'
import WhatsAppIcon from '../components/WhatsAppIcon';
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google'

 

 

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

 

  return (
    <html className="no-js no-touch supports-no-cookies" lang="en"> 
    <>
  <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
  <meta content="en" httpEquiv="Content-Language" />
  <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
  <meta
    content="width=device-width, initial-scale=1, maximum-scale=1"
    name="viewport"
  />
  <meta content="max-image-preview:large" name="robots" />
  <title>
    Abbas Baba
  </title>
  <meta
    content="At Abbas Baba, we're reshaping the way businesses connect."
    name="description" 
  />
  <meta content="Abbas Baba" name="keywords" property="abbasbaba, shoes, men, women" />

 
 
  <meta content="#ffffff" name="msapplication-TileColor" />
  <meta content="#ffffff" name="theme-color" />
  <link href="https://assets.bellroy.com" rel="preconnect" />
  <link href="https://bellroy.imgix.net" rel="preconnect" /> 
  

 
 










  <link
    href="css/webfonts-3e3c2400.css"
    rel="preload"
    as="style"
  />
  <link
    rel="stylesheet"
    href="css/webfonts-3e3c2400.css"
    media="print" 
  />
  <link
    rel="stylesheet"
    href="css/style-4109db2b.css"
  />

<link href="https://fonts.cdnfonts.com/css/lato" rel="stylesheet"/> 
 

 
  
</>

      <body>

 
      <GifLoader />

        
        <BooleanProvider>
        <CartProvider>
          <Navbar2 />
          <WhatsAppIcon />
          {children}
          <GoogleAnalytics gaId="G-GKVJEXB18C" />
          <Footer />
        </CartProvider>
        </BooleanProvider>
        
      </body>
    </html>
  )
}
