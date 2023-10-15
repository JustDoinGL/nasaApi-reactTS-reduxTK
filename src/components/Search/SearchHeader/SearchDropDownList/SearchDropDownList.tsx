import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'

import {
	changeSearch,
	getSearchSelector
} from '../../../../redux/search/searchSlice'

import { ArrowBottom } from '../../../../assets/svg'

import styles from './SearchDropDownList.module.css'

const SearchDropDownList = () => {
	const dispatch = useAppDispatch()
	const { searchPV } = useAppSelector(getSearchSelector)
	const [showDropdown, setShowDropdown] = useState(false)

	const handleDropdownClick = () => {
		setShowDropdown(e => (e = !e))
	}

	const handleDropdownItemClick = (index: number) => {
		dispatch(changeSearch(index + 1))
	}
	return (
		<div className={styles.container} onClick={handleDropdownClick}>
			<p>{searchPV[0]}</p>
			<ul
				className={styles.list}
				style={{ display: showDropdown ? 'block' : 'none' }}
			>
				{searchPV.slice(1).map((el, index) => (
					<li
						key={index}
						className={styles.item}
						onClick={() => handleDropdownItemClick(index)}
					>
						{el}
					</li>
				))}
			</ul>
			<ArrowBottom />
		</div>
	)
}

export default SearchDropDownList
