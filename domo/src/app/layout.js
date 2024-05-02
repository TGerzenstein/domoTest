import { Montserrat } from "next/font/google";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


// export default function MyApp({ Component, pageProps }) {
// return <Component {...pageProps} />
// }


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['400','500','600','700','800'],
})

export const metadata = {
  title: "Domo Test",
  description: "Test frontend for Domo agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
