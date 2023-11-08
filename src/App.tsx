import { lazy } from 'react'

import { Routes, Route } from 'react-router-dom'

import Search from './pages/Search/Search'

import SearchLayout from './layout/Search/SearchLayout'

import PicturesLayout from './layout/Pictures/PicturesLayout'
import AsteroidsLayout from './layout/Asteroids/AsteroidsLayout'

const AsteroidsPage = lazy(
	() =>
		import(
			/* webpackChunkName: "AsteroidsPage" */ './pages/Asteroids/AsteroidsPage'
		)
)
const AsteroidPage = lazy(
	() =>
		import(
			/* webpackChunkName: "AsteroidPage" */ './pages/Asteroids/Asteroid/AsteroidPage'
		)
)
const DestroyPage = lazy(
	() =>
		import(
			/* webpackChunkName: "DestroyPage" */ './pages/Asteroids/Destroy/DestroyPage'
		)
)
const NotFoundPage = lazy(
	() =>
		import(
			/* webpackChunkName: "NotFoundPage" */ './pages/NotFound/NotFoundPage'
		)
)
const PicturesPage = lazy(
	() =>
		import(
			/* webpackChunkName: "PicturesPage" */ './pages/Pictures/PicturesPage'
		)
)

function App() {
	return (
		<Routes>
			<Route path={`/`} element={<SearchLayout />}>
				<Route index element={<Search />} />
			</Route>

			<Route path={`/pictures`} element={<PicturesLayout />}>
				<Route index element={<PicturesPage />} />
			</Route>

			<Route path={`/asteroids`} element={<AsteroidsLayout />}>
				<Route index element={<AsteroidsPage />} />
				<Route path={`/asteroids/destroy`} element={<DestroyPage />} />
				<Route path={`/asteroids/:id`} element={<AsteroidPage />} />
			</Route>

			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	)
}

export default App
