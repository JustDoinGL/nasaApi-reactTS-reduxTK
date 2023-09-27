import styles from './Style.module.css'

const LeftGallery = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='47'
			height='56'
			viewBox='0 0 47 56'
			fill='none'
			className={styles.arrow}
		>
			<g clip-path='url(#clip0_0_742)'>
				<path
					d='M27.4167 14L28.4999 14.5L17.4999 28L28.4999 41L27.4167 42L15.6667 28L27.4167 14Z'
				/>
			</g>
			<defs>
				<clipPath id='clip0_0_742'>
					<rect
						width='47'
						height='56'
						fill='white'
						transform='matrix(-1 0 0 1 47 0)'
					/>
				</clipPath>
			</defs>
		</svg>
	)
}

export default LeftGallery
