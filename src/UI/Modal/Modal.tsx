import { ModalProps } from './Modal.type'

import getInfo from './Modal.actions'

import styles from './Modal.module.css'

const Modal = ({ setIsOpen, picture, item = []}: ModalProps) => {
	const handleCloseModal = () => {
		setIsOpen(false)
	}

	const info = getInfo(picture, item)
	const { title, explanation, url } = info

	return (
		<div className={styles.modalOverlay}>
			<div className={styles.modalContent}>
				<button className={styles.closeButton} onClick={handleCloseModal}>
					❌
				</button>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.text}>{explanation}</p>
				<img className={styles.img} src={url} alt={title} />
			</div>
		</div>
	)
}

export default Modal
