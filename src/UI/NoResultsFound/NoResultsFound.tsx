import { NoResultsFoundProps } from './NoResultsFound.type'

import styles from './NoResultsFound.module.css'

const NoResultsFound = ({ query }: NoResultsFoundProps) => {
	return (
		<>
			<h3 className={styles.heading}>No results found for "{query}" 😔</h3>
			<p className={styles.text}>Please try again or refine your search.</p>
		</>
	)
}

export default NoResultsFound
