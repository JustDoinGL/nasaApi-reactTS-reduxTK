import Header from '../../components/Header/Header'

import { utils } from '../../utils'

import styles from './Notfound.module.css'

const NotFound = () => {
	const { url } = utils

	const data = [
		{ url: url, name: 'Home' },
		{ url: '/11', name: '1' }
	]

	return (
		<div className={styles.container}>
			<Header data={data} />
			<div className={styles.not__found}>
				<h1 className={styles.header}>404 - Страница не найдена 😞</h1>
				<p className={styles.text}>
					Извините, мы не смогли найти запрошенную страницу.
				</p>
			</div>
		</div>
	)
}

export default NotFound
