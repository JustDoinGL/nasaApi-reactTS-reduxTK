import { Routes, Route } from 'react-router-dom'

import './App.css'

import { Layout } from './components/Layout/Layout'
import NotFound from './pages/Notfoundpage/Notfound'
import Asteroids from './pages/Asteroids/AsteroidsPage'

import { utils } from './utils'

function App() {
	const { url } = utils
	return (
		<>
			<Routes>
				<Route path={`${url}`} element={<Layout />}>
					<Route index element={<Asteroids />} />
					{/*<Route path="about" element={<About />} /> */}
				</Route>
				<Route path={`*`} element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App
