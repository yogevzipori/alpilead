import "./globals.css";
import Foot from './foot'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <head />
      <body>
      <enableGoogleAdsense />
        
        {children}</body>

      <Foot />
    </html>
  );
}
