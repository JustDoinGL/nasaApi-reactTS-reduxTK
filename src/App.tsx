import { Routes, Route } from 'react-router-dom'

import {
	AsteroidPage,
	AsteroidsPage,
	DestroyPage,
	NotFoundPage,
	PicturesPage,
	Search
} from './pages'

import {
	AsteroidsLayout,
	PicturesLayout,
	SearchLayout
} from './components/Layout'


function App() {
	return (
		<>
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

				<Route path={`*`} element={<NotFoundPage />} />
			</Routes>
		</>
	)
}

export default App
