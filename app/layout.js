import "./globals.css";
import Foot from './foot'
import enableGoogleAdsense from './googleAdsense'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <head />
      <enableGoogleAdsense />
      <body>{children}</body>

      <Foot />
    </html>
  );
}
