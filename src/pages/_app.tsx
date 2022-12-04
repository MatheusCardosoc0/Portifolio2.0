import '../styles/globals.css'
import '../styles/modules.css'
import type { AppProps } from 'next/app'
import Layaut from '../Layaut/Layaut'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layaut>
      <Component {...pageProps} />
    </Layaut>
  )
}

export default MyApp