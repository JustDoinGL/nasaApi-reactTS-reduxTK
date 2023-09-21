import styles from './AsteroidsHeader.module.css'

import { AsteroidsHeaderProps } from './AsteroidsHeader.type'

const AsteroidsHeader = ({activeKilometers, setActiveKilometers} : AsteroidsHeaderProps) => {
    const handleClick = (isKil: boolean) => setActiveKilometers(isKil)

	return (
		<div className={styles.header}>
			<h1 className={styles.infinity__title}>Nearest asteroid approaches</h1>
			<div className={styles.text__container}>
				<p
					className={
						activeKilometers
							? `${styles.text} ${styles.text__active}`
							: `${styles.text}`
					}
					onClick={() => handleClick(true)}
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
					onClick={() => handleClick(false)}
				>
					in lunar orbits
				</p>
			</div>
			
		</div>
	)
}

export default AsteroidsHeader
