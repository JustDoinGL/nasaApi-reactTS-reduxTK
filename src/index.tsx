import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import { utils } from './utils'

import App from './App'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const { url } = utils
root.render(
		<Provider store={store}>
			<BrowserRouter basename={`/${url}`}>
				<App />
			</BrowserRouter>
		</Provider>
)



