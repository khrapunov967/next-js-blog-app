import Layout from "./components/Layout";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
