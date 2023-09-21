import { useState } from 'react'

import { AsteroidsHeader, AsteroidsMain } from '../../components/Asteroids'

import styles from './AsteroidsPage.module.css'

const AsteroidsPage = () => {
	const [activeKilometers, setActiveKilometers] = useState(false)

	return (
		<div className={styles.container}>
			<div className={styles.info}>
			<h1 className={styles.heading}>ARMAGEDDON 2023</h1>
			<p className={styles.context}>LLC “Team im. B. Willis.”</p>
			<p className={styles.context}>We've been blowing up asteroids since 1998.</p>
			</div>
			<div className={styles.bg}></div>
			<div className={styles.main}>
				<AsteroidsHeader
					activeKilometers={activeKilometers}
					setActiveKilometers={setActiveKilometers}
				/>
				<AsteroidsMain activeKilometers={activeKilometers} />
			</div>
		</div>
	)
}

export default AsteroidsPage
