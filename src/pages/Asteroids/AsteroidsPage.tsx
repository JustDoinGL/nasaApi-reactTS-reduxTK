import { useInView } from 'react-intersection-observer'

import {
	AsteroidAside,
	AsteroidsHeader,
	AsteroidsMain
} from '../../components/Asteroids'

import styles from './AsteroidsPage.module.css'

const AsteroidsPage = () => {
	const { ref, inView } = useInView()

	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<AsteroidsHeader
					title='Nearest asteroid approaches'
					refUseInViewPage={ref}
				/>
				<AsteroidsMain inViewPage={inView} />
			</div>
			<div>
				<AsteroidAside />
			</div>
		</div>
	)
}

export default AsteroidsPage 
