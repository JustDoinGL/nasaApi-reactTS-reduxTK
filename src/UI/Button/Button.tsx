import React from 'react'

import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../hooks/redux'

import styles from './Button.module.css'

import { ButtonProps } from './Button.type'

const Button = ({ text, style, click, asteroid }: ButtonProps) => {
	const dispatch = useDispatch()
	const { activeAsteroids } = useAppSelector(state => state.asteroids)

	const handleClick = () => {
		if (text === 'choose' && asteroid) {
			dispatch(click(asteroid))
		} else if (text === 'destroy') {
			click()
		} else if (text === 'delete') {
			dispatch(click())
		}
	}

	const isActive = asteroid && activeAsteroids.some(el => el.id === asteroid.id)

	return (
		<button
			className={`${styles[style]} ${isActive ? styles.active : ''}`}
			onClick={handleClick}
		>
			{text !== 'choose' ? text : isActive ? text : ' selected'}
		</button>
	)
}

export default React.memo(Button)
