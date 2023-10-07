import { useInView } from 'react-intersection-observer'
import { SearchMainImgProps } from './SearchMain.type'

import styles from './SearchMainImg.module.css'

const SearchMainImg = ({ el, description }: SearchMainImgProps) => {
	const { ref, inView } = useInView({
		threshold: 0.6,
		triggerOnce: true
	})

	const handleClick = () => {

	}
	return (
		<div className={styles.gallery__item} key={el.href} ref={ref}>
			{inView ? <img src={el.href} alt={description} onClick={handleClick} /> : <div className={styles.skeleton}></div>}
		</div>
	)
}

export default SearchMainImg
