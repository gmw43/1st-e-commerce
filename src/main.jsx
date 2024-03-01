import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GlobalProvider } from './Components/AllComponents/GlobalContextComp/GlobalContext.jsx'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalProvider>
    <Auth0Provider
      domain="{dev-guzk37cjwogo6v8v.us.auth0.com}"
      clientId="{dLOzLBUdoH1jrK3HF3d0gp6xSsuvAVFS}"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </GlobalProvider>
)
