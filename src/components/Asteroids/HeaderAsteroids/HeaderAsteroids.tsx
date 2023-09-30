import { useNavigate } from 'react-router-dom'

import styles from './HeaderAsteroids.module.css'

const HeaderAsteroids = () => {
	const navigate = useNavigate()

	return (
		<div className={styles.info}>
			<p className={styles.back} onClick={() => navigate(-1)}>◄ Back</p>
			<h1 className={styles.heading}>ARMAGEDDON 2023</h1>
			<p className={styles.context}>LLC “Team im. B. Willis.”</p>
			<p className={styles.context}>
				We've been blowing up asteroids since 1998.
			</p>
		</div>
	)
}

export default HeaderAsteroids
