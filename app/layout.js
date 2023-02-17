import "./globals.css";
import Foot from './foot'
import GoogleAdsense from './googleAdsense'




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

<GoogleAdsense />
</head>
     
      <body>
        
        {children}</body>

      <Foot />
    </html>
  );
}
