import '../styles/globals.css'
import React, {useEffect} from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from "reduxjs-toolkit-persist/integration/react"
import { store, persistor } from '../redux/store/store'
import { useRouter } from 'next/router'
import NextNProgress from "nextjs-progressbar"

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NextNProgress color='red' />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  )
}

export default MyApp
