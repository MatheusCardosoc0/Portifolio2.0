import '../styles/globals.css'
import '../styles/modules.css'
import type { AppProps } from 'next/app'
import Layaut from '../Layaut/Layaut'
import UseDataContext from '../context/UseDataContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UseDataContext>
      <Layaut>
        <Component {...pageProps} />
      </Layaut>
    </UseDataContext>
  )
}

export default MyApp