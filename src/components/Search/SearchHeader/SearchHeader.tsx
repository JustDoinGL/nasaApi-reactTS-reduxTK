import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

import { changeInput, fetchSearch } from '../../../store/search/searchSlice'

import SearchDropDownList from './SearchDropDownList/SearchDropDownList'
import { Button } from '../../../UI'
import { CloseButton, Search } from '../../../svg'

import styles from './SearchHeader.module.css'

const SearchHeader = () => {
	const dispatch = useAppDispatch()
	const { valueInput, searchPV } = useAppSelector(state => state.search)

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(fetchSearch([searchPV[0], valueInput]))
			e.currentTarget.blur()
    }
  }

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
					onChange={e => handleChange(e)}
					onKeyDown={handleKeyDown}
				/>
				{valueInput && (
					<div className={styles.closeButton} onClick={() => dispatch(changeInput(""))}>
						<CloseButton />
					</div>
				)}
			</div>
			<SearchDropDownList />
			<Button click={fetchSearch} text='Search' styleProps='search' />
		</div>
	)
}

export { SearchHeader }
