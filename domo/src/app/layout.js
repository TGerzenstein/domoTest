import { Inter } from "next/font/google";
import "./globals.css";
//import bootstrap from 'bootstrap';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// export default function MyApp({ Component, pageProps }) {
// return <Component {...pageProps} />
// }

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Demo Domo Test",
  description: "Next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
