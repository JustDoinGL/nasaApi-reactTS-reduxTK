import { useState } from 'react'

import {
	AsteroidAside,
	AsteroidsHeader,
	AsteroidsMain
} from '../../components/Asteroids'

import styles from './AsteroidsPage.module.css'

const AsteroidsPage = () => {
	const [activeKilometers, setActiveKilometers] = useState(false)

	return (
		<div className={styles.container__main}>
			<div className={styles.main}>
				<AsteroidsHeader
					activeKilometers={activeKilometers}
					setActiveKilometers={setActiveKilometers}
				/>
				<AsteroidsMain activeKilometers={activeKilometers} />
			</div>
			<div>
				<AsteroidAside />
			</div>
		</div>
	)
}

export default AsteroidsPage
