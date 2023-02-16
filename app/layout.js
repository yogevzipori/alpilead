import "./globals.css";
import Foot from './foot'
import GoogleAdsense from './googleAdsense'




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <head />
      <body>
      <GoogleAdsense />
        
        {children}</body>

      <Foot />
    </html>
  );
}
