import styles from './Style.module.css'

const ArrowTop = () => {
	return (
			<svg
				width='30px'
				height='30px'
				viewBox='0 0 20 20'
				xmlns='http://www.w3.org/2000/svg'
				className={styles.arrowWhite}
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
					d='M10 18V2m0 0l7 7m-7-7L3 9'
				/>
			</svg>
	)
}

export default ArrowTop
