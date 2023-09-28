import { ModalProps } from './Modal.type'

import styles from './Modal.module.css'

const Modal = ({ setIsOpen, picture }: ModalProps) => {
	const handleCloseModal = () => {
		setIsOpen(false)
	}

	return (
		<div className={styles.modalOverlay} onClick={handleCloseModal}>
			<div className={styles.modalContent}>
				<button className={styles.closeButton} onClick={handleCloseModal}>
					❌
				</button>
				<h1 className={styles.title}>{picture.title}</h1>
				<p className={styles.text}>{picture.explanation}</p>
				<img className={styles.img} src={picture.url} alt={picture.title} />
			</div>
		</div>
	)
}

export default Modal
