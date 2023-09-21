import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

import styles from './AsteroidsMain.module.css'

import { AsteroidsMainProps } from './AsteroidsMain.type'
import { DoubleArrow } from '../../../svg'
import { Error, Loader } from '../../../UI'

import BigAsteroid from '../../../img/asteroidBig.svg'
import SmallAsteroid from '../../../img/asteroidSmall.svg'

import { fetchAsteroids } from '../../../store/asteroids/asteroidsSlice'

const AsteroidsMain = ({ activeKilometers }: AsteroidsMainProps) => {
	const dispatch = useAppDispatch()
	// TODO:
	const [day, setDay] = useState(0)
	const { ref, inView } = useInView()

	const { status, arrAsteroids } = useAppSelector(state => state.asteroids)

	useEffect(() => {
		const fetchData = async () => {
			const dayRight = '2023-09-10'
			await dispatch(fetchAsteroids(dayRight))
		}
		if (inView) {
			fetchData()
		}
	}, [dispatch, inView])

	return (
		<div className={styles.main}>
			{arrAsteroids?.map(el => (
				<div className={styles.container} key={el.id}>
					<h3 className={styles.h3}>
						{el.close_approach_data[0].close_approach_date}
					</h3>
					<div className={styles.container__main}>
						<div>
							<p className={styles.container__main_left}>
								{!activeKilometers
									? `${
											el.close_approach_data[0].miss_distance.lunar.split(
												'.'
											)[0]
									  } lunar orbits`
									: `${el.close_approach_data[0].miss_distance.kilometers
											.split('.')[0]
											.split('')
											.reverse()
											.join('')
											.replace(/(\d{3}(?!$))/g, '$1 ')} km`}
							</p>
							<DoubleArrow />
						</div>
						{el.estimated_diameter.meters.estimated_diameter_max > 100 ? (
							<img className={styles.asteroid} style={{backgroundColor: "transparent"}} src={BigAsteroid} alt='BigAsteroid' />
						) : (
							<img className={styles.asteroid} src={SmallAsteroid} alt='SmallAsteroid' />
						)}

						<div>
							<h3 className={styles.year}>
								{el.name
									.match(/\((.*?)\)/g)
									?.map((match: string) =>
										match.substring(1, match.length - 1)
									)}
							</h3>
							<p className={styles.pm}>
								Ø{' '}
								{Math.floor(
									el.estimated_diameter.meters.estimated_diameter_max
								)}{' '}
								м
							</p>
						</div>
					</div>
				</div>
			))}
			<div ref={ref}>
				{status === 'pending' && <Loader />}
				{status === 'rejected' && <Error />}
			</div>
		</div>
	)
}

export default AsteroidsMain
