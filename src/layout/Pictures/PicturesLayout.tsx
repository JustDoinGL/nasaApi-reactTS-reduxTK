import { useAppSelector } from '../../hooks/redux'

import { Outlet } from 'react-router-dom'

import { Footer, Header } from '../../components'

import styles from './PicturesLayout.module.css'
import { Loader } from '../../UI'
import { Suspense } from 'react'

const PicturesLayout = () => {
 const {objHeader} = useAppSelector(state => state.header)

	return (
		<div className={styles.container}>
			<Header data={objHeader} />
			<main className={styles.content}>
			<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
			</main>
			<Footer />
		</div>
	)
}

export default PicturesLayout
