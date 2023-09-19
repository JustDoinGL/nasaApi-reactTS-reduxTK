import { Routes, Route } from 'react-router-dom'

import './App.css'

import { Layout } from './components/Layout/Layout'
import NotFound from './components/Notfound/Notfound'

import { utils } from './utils'

function App() {
	const { url } = utils
	return (
		<>
			<Routes>
				<Route path={`${url}`} element={<Layout />}>
					{/* <Route index element={<Homepage />} />
          <Route path="about" element={<About />} /> */}
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
