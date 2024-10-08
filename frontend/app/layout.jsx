
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/main.scss';
import '@/styles/pages/home.scss';
import LayoutApp from '@/layout/LayouApp';
import { Provider } from 'react-redux';
import store from '@/store/store';

export const metadata = {
  title: 'Future Tech',
  description: 'Explore the Frontiers of Artificial Intelligence'
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
          <LayoutApp >
            {children}
          </LayoutApp>
      </body>
    </html>
    )
  }