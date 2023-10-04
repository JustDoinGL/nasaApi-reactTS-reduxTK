import { useAppDispatch, useAppSelector } from '../../hooks/redux'

import {
	changeInput,
	fetchSearchPictures
} from '../../store/search/searchPicturesSlice'

import { LoadError } from '../../UI'

import styles from './SearchPictures.module.css'

const SearchPictures = () => {
	const dispatch = useAppDispatch()
	const { status, valueInput, picture } = useAppSelector(
		store => store.searchPictures
	)

	const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(changeInput(e.target.value))
	}

	const handlerClick = () => {
		dispatch(fetchSearchPictures(valueInput))
	}

	if (status === 'pending' || status === 'rejected') {
		return (
			<div className={styles.container__helper}>
				<LoadError status={status} />
			</div>
		)
	}

	return (
		<div className={styles.main}>
			<input type='text' value={valueInput} onChange={e => changeValue(e)} />
			<button onClick={handlerClick}>xxxxx</button>
			{picture?.map(el => (
				<img src={el.href} />
			))}
		</div>
	)
}

export { SearchPictures }
