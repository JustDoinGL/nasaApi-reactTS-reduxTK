import { useAppSelector } from '../../../hooks/redux'

import { Outlet } from 'react-router-dom'

import { Footer, Header } from '../../index'

import styles from './SearchLayout.module.css'

const SearchLayout = () => {
	const { objHeader } = useAppSelector(state => state.header)

	return (
		<div className={styles.container}>
			<Header data={objHeader} />
			<main className={styles.content}>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export { SearchLayout }
