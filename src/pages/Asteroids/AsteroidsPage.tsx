import {
	AsteroidAside,
	AsteroidsHeader,
	AsteroidsMain
} from '../../components/Asteroids'

import styles from './AsteroidsPage.module.css'

const AsteroidsPage = () => {

	return (
		<div className={styles.container__main}>
			<div className={styles.main}>
				<AsteroidsHeader title='Nearest asteroid approaches'
				/>
				<AsteroidsMain />
			</div>
			<div>
				<AsteroidAside />
			</div>
		</div>
	)
}

export default AsteroidsPage
