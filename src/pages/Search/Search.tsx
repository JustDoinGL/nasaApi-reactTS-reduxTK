import { SearchHeader } from '../../components/Search'
import { useAppSelector } from '../../hooks/redux'

import { LoadError } from '../../UI'

import styles from './Search.module.css'

const Search = () => {
	const { picture, status } = useAppSelector(
		store => store.searchPictures
	)

	// if (status === 'pending' || status === 'rejected') {
	// 	return (
	// 		<div className={styles.container__helper}>
	// 			<LoadError status={status} />
	// 		</div>
	// 	)
	// }

	return (
		<div className={styles.container}>
			<div className={styles.header}>
			<SearchHeader />
			</div>
			
			{picture?.map(el => <img src={el.href} key={el.href} />)}
		</div>
	)
}

export { Search }
