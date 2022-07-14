import React from 'react'
import { createRoot } from 'react-dom/client'
// Global Context wrap App component!
import { SlotContextProvider } from './context'
// App
import App from './App'

const container = document.getElementById('root')

const root = createRoot(container)

root.render(
  <React.StrictMode>
    <SlotContextProvider>
      <App name='slot-machine' />
    </SlotContextProvider>
  </React.StrictMode>
)
