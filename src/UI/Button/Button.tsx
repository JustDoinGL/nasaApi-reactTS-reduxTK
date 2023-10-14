import React from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'

import { ButtonProps } from './Button.type'

import styles from './Button.module.css'

const Button = ({ text, styleProps, click, asteroid }: ButtonProps) => {
	const dispatch = useAppDispatch()
	const { activeAsteroids } = useAppSelector(state => state.asteroids)
	const { searchPV, valueInput } = useAppSelector(state => state.search)

	const handleClick = () => {
		switch (text) {
			case 'choose':
				if (asteroid) {
					dispatch(click(asteroid))
				} else {
					console.warn('No asteroid selected')
				}
				break
			case 'destroy':
				click()
				break
			case 'delete':
				dispatch(click())
				break
			case 'Search':
				dispatch(click([searchPV[0], valueInput]))
				break
			default:
				console.warn('Unknown button type')
		}
	}

	const isActive = asteroid && activeAsteroids.some((el: { id: string }) => el.id === asteroid.id)

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
