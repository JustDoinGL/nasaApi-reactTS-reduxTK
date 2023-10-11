import { Outlet } from 'react-router-dom'

import { useAppSelector } from '../../../hooks/redux'

import { Footer, Header } from '../../index'

import styles from './PicturesLayout.module.css'

const PicturesLayout = () => {
 const {objHeader} = useAppSelector(store => store.header)

	return (
		<div className={styles.container}>
			<Header data={objHeader} />
			<main className={styles.main__content}>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export { PicturesLayout }
