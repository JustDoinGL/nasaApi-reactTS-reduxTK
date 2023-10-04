import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

import { changeInput, fetchSearch } from '../../../store/search/searchSlice'

import SearchDropDownList from './SearchDropDownList/SearchDropDownList'
import { Button } from '../../../UI'
import { Search } from '../../../svg'

import styles from './SearchHeader.module.css'

const SearchHeader = () => {
	const dispatch = useAppDispatch()
	const { valueInput } = useAppSelector(store => store.searchPictures)

	const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(changeInput(e.target.value))
	}

	return (
		<div className={styles.container}>
			<div className={styles.search}>
				<Search />
				<input
					className={styles.input}
					type='text'
					placeholder='The name of the planet...'
					value={valueInput}
					onChange={e => changeValue(e)}
				/>
			</div>
			<SearchDropDownList />
			<Button click={fetchSearch} text='Search' styleProps='search' />
		</div>
	)
}

export { SearchHeader }
