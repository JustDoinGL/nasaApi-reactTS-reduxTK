import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

import './index.css'

import App from './App'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import { utils } from './utils'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const { url } = utils
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter basename={`/${url}`}>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
)


reportWebVitals()
