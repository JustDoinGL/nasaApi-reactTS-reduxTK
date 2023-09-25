import { Routes, Route } from 'react-router-dom'

import './App.css'

import NotFound from './pages/Notfoundpage/Notfound'
import Asteroids from './pages/Asteroids/AsteroidsPage'
import DestroyPage from './pages/Asteroids/Destroy/DestroyPage'

import { utils } from './utils'
import { AsteroidsLayout } from './components/Layout/Asteroids/AsteroidsLayout'

function App() {
	return (
		<>
			<Routes>
				<Route path={`/asteroids`} element={<AsteroidsLayout />}>
					<Route index element={<Asteroids />} />
					<Route path={`/asteroids/destroy`} element={<DestroyPage />} />
				</Route>


				<Route path={`*`} element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App
