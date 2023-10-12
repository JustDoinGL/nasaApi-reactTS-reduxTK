import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { SearchMainImgProps } from './SearchMain.type'

import { Modal } from '../../../../UI'

import styles from './SearchMainImg.module.css'

const SearchMainImg = ({ el, description, item}: SearchMainImgProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const { ref, inView } = useInView({
		threshold: 0.6,
		triggerOnce: true
	})

	const handleClick = () => {
		setIsOpen(true)
	}

	return (
		<>
			{isOpen && <Modal setIsOpen={setIsOpen} picture={el} item={item} />}
			<div className={styles.item} key={el.href} ref={ref}>
				{inView ? (
					<img src={el.href} alt={description} onClick={handleClick} />
				) : (
					<div className={styles.skeleton}></div>
				)}
			</div>
		</>
	)
}

export default SearchMainImg
