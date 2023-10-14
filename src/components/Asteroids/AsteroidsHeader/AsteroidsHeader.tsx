import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

import { isActiveKilometers } from '../../../store/asteroids/asteroidsSlice'

import { AsteroidsHeaderProps } from './AsteroidsHeader.type'

import styles from './AsteroidsHeader.module.css'

const AsteroidsHeader = ({ title, refUseInViewPage }: AsteroidsHeaderProps) => {
	const dispatch = useAppDispatch()
	const { activeKilometers } = useAppSelector(state => state.asteroids)

	const handleClick = () => {
		dispatch(isActiveKilometers())
	}

	const getTextClassName = (isActive: boolean) =>
		isActive ? `${styles.text} ${styles.active}` : styles.text

	return (
		<div className={styles.header} ref={refUseInViewPage}>
			<h1 className={styles.title}>{title}</h1>
			<div className={styles.container}>
				<p className={getTextClassName(activeKilometers)} onClick={handleClick}>
					in kilometers
				</p>
				<span className={styles.span}>|</span>
				<p
					className={getTextClassName(!activeKilometers)}
					onClick={handleClick}
				>
					in lunar orbits
				</p>
			</div>
		</div>
	)
}

export default AsteroidsHeader
