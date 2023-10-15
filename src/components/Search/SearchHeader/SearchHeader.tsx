import React, { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

import {
	changeInput,
	fetchSearch,
	getSearchSelector
} from '../../../redux/search/searchSlice'

import SearchDropDownList from './SearchDropDownList/SearchDropDownList'
import { Button } from '../../../UI'
import { CloseButton, Search } from '../../../assets/svg'

import styles from './SearchHeader.module.css'

const SearchHeader = () => {
	const inputRef = useRef<HTMLInputElement>(null)
	const dispatch = useAppDispatch()
	const { valueInput, searchPV } = useAppSelector(getSearchSelector)

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleSearch()
			inputRef.current?.blur()
		}
	}

	useEffect(() => {
		inputRef.current?.focus()
	}, [])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(changeInput(e.target.value))
	}

	const handleClearInput = (e: React.MouseEvent<HTMLDivElement>) => {
		dispatch(changeInput(''))
		inputRef.current?.focus()
	}

	const handleSearch = () => {
		dispatch(fetchSearch([searchPV[0], valueInput]))
	}

	return (
		<div className={styles.container}>
			<div className={styles.search}>
				<Search />
				<input
					ref={inputRef}
					className={styles.input}
					type='text'
					placeholder='The name of the planet...'
					value={valueInput}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
				/>
				{valueInput && (
					<div className={styles.closeButton} onClick={handleClearInput}>
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
