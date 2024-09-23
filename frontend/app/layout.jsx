import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/main.scss';
import '@/styles/pages/home.scss';
import Navbar from '@/layout/Navbar';
import Footer from '@/layout/Footer';

export const metadata = {
    title: 'Future Tech',
    description: 'Explore the Frontiers of Artificial Intelligence'
}

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
            <Navbar/>
              {children}
            <Footer/>
        </body>
      </html>
    )
  }