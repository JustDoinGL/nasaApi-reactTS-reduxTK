import { SearchHeader, SearchMain } from '../../components/Search'
import { useAppSelector } from '../../hooks/redux'
import { getSearchSelector } from '../../redux/search/searchSlice'

import { LoadError, NoResultsFound } from '../../UI'

import styles from './Search.module.css'

const Search = () => {
	const { items, status, valueInputLast, isLoad } =
		useAppSelector(getSearchSelector)

	const renderContent = () => {
		if (status === 'pending' || status === 'rejected') {
			return (
				<div className={styles.helper}>
					<LoadError status={status} />
				</div>
			)
		}

		if (items.length > 0 || !isLoad) {
			return (
				<div className={styles.img}>
					{items.map(item => (
						<SearchMain item={item} key={item.href} />
					))}
				</div>
			)
		}

		return (
			<div className={styles.notFound}>
				<NoResultsFound query={valueInputLast} />
			</div>
		)
	}

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<SearchHeader />
			</div>
			<div className={styles.main}>{renderContent()}</div>
		</div>
	)
}

export default Search 
