import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'

import { changeSearch } from '../../../../store/search/searchSlice'

import { ArrowBottom } from '../../../../svg'

import styles from './SearchDropDownList.module.css'

const SearchDropDownList = () => {
	const dispatch = useAppDispatch()
	const { searchPV } = useAppSelector(store => store.searchPictures)
	const [showDropdown, setShowDropdown] = useState(false)

	const handleDropdownClick = () => {
		setShowDropdown(e => (e = !e))
	}

	const handleDropdownItemClick = (index: number) => {
		dispatch(changeSearch(index + 1))
	}
	return (
		<div className={styles.dropdown__container} onClick={handleDropdownClick}>
			<p>{searchPV[0]}</p>
			<ul
				className={styles.dropdown__list}
				style={{ display: showDropdown ? 'block' : 'none' }}
			>
				{searchPV.slice(1).map((el, index) => (
					<li
						key={index}
						className={styles.dropdown__list_item}
						onClick={() => handleDropdownItemClick(index)}
					>
						{el}
					</li>
				))}
			</ul>
			{<ArrowBottom />}
		</div>
	)
}

export default SearchDropDownList
