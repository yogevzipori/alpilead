import "./globals.css";
import Foot from './foot'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>

      <Foot />
    </html>
  );
}
