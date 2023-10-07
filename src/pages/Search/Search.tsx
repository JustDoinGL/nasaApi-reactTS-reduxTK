import { SearchHeader, SearchMain } from '../../components/Search'
import { useAppSelector } from '../../hooks/redux'

import { LoadError, NoResultsFound } from '../../UI'

import styles from './Search.module.css'

const Search = () => {
	const { items, status, valueInputLast } = useAppSelector(store => store.search)

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<SearchHeader />
			</div>
			<div className={styles.main}>
				{status === 'pending' || status === 'rejected' ? (
					<div className={styles.container__helper}>
						<LoadError status={status} />
					</div>
				) : (
					<div className={styles.main__img}>
						{items.length > 0 ? (
							items?.map(item => <SearchMain item={item} key={item.href} />)
						) : (
							<div className={styles.notFound}>
								<NoResultsFound query={valueInputLast} />
							</div>	
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export { Search }
