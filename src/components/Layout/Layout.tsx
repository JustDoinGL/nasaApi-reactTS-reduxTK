import { NavLink, Outlet } from 'react-router-dom'

import { utils } from '../../utils'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = () => {
	const { url } = utils

	const data = [
		{ url: url, name: 'Home' },
		{ url: '/11', name: '1' }
	]

	return (
		<>
			<Header data={data} />
			<main className='container'>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export { Layout }
