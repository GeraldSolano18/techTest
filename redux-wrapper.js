import React from "react"

import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { getStore, getPersistor } from "./src/redux/store"



const reduxWrapper = ({ element }) => {
  const store = getStore()
  const persistor = getPersistor(store)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {element}
      </PersistGate>
    </Provider>
  )
}

export default reduxWrapper;
