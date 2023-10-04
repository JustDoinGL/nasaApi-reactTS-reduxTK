import React from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'

import { ButtonProps } from './Button.type'

import styles from './Button.module.css'

const Button = ({ text, styleProps, click, asteroid }: ButtonProps) => {
	const dispatch = useAppDispatch()
	const { activeAsteroids } = useAppSelector(state => state.asteroids)
	const { searchPV, valueInput } = useAppSelector(state => state.searchPictures)

	const handleClick = () => {
		if (text === 'choose' && asteroid) {
			dispatch(click(asteroid))
		} else if (text === 'destroy') {
			click()
		} else if (text === 'delete') {
			dispatch(click())
		} else if (text === 'Search') {
			const q = searchPV[0]
			dispatch(click([searchPV[0], valueInput]))
		}
	}

	const isActive = asteroid && activeAsteroids.some(el => el.id === asteroid.id)

	return (
		<button
			className={`${styles[styleProps]} ${isActive ? styles.active : ''}`}
			onClick={handleClick}
		>
			{text !== 'choose' ? text : isActive ? text : ' selected'}
		</button>
	)
}

export default React.memo(Button)
