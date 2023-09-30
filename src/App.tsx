import { Routes, Route } from 'react-router-dom'

import NotFound from './pages/Notfoundpage/Notfound'
import AsteroidsPage from './pages/Asteroids/AsteroidsPage'
import PicturesPage from './pages/Pictures/PicturesPage'
import DestroyPage from './pages/Asteroids/Destroy/DestroyPage'
import { AsteroidPage } from './pages/Asteroids/Asteroid/AsteroidPage'

import { AsteroidsLayout } from './components/Layout/Asteroids/AsteroidsLayout'
import { PicturesLayout } from './components/Layout/Pictures/PicturesLayout'

import './App.css'

function App() {
	return (
		<>
			<Routes>
				<Route path={`/`} element={<PicturesLayout />}>
					<Route index element={<PicturesPage />} />
				</Route>

				<Route path={`/asteroids`} element={<AsteroidsLayout />}>
					<Route index element={<AsteroidsPage />} />
					<Route path={`/asteroids/destroy`} element={<DestroyPage />} />
					<Route path={`/asteroids/:id`} element={<AsteroidPage />} />
				</Route>

				<Route path={`*`} element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App
