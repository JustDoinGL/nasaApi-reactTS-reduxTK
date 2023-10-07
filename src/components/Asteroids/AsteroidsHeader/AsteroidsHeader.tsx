import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { isActiveKilometers } from '../../../store/asteroids/asteroidsSlice'

import { AsteroidsHeaderProps } from './AsteroidsHeader.type'

import styles from './AsteroidsHeader.module.css'


const AsteroidsHeader = ({title, refUseInViewPage}: AsteroidsHeaderProps) => {
	const dispatch = useAppDispatch()
	const { activeKilometers } = useAppSelector((store) => store.asteroids)

	const handleClick = () => {
		dispatch(isActiveKilometers())
	}

	return (
		<div className={styles.header} ref={refUseInViewPage}>
			<h1 className={styles.infinity__title}>{title}</h1>
			<div className={styles.text__container}>
				<p
					className={
						activeKilometers
							? `${styles.text} ${styles.text__active}`
							: `${styles.text}`
					}
					onClick={handleClick}
				>
					in kilometers
				</p>
				<span className={styles.span}>|</span>
				<p
					className={
						!activeKilometers
							? `${styles.text} ${styles.text__active}`
							: `${styles.text}`
					}
					onClick={handleClick}
				>
					in lunar orbits
				</p>
			</div>
		</div>
	)
}

export default AsteroidsHeader
