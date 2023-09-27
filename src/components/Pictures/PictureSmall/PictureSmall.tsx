import { PicturesSmallProps } from './PictureSmall.type'

import { useAppDispatch } from '../../../hooks/redux'
import { changeImg } from '../../../store/pictures/picturesSlice'

import styles from './PictureSmall.module.css'

const PictureSmall = ({ picture }: PicturesSmallProps) => {
	const dispatch = useAppDispatch()

	const clickHandler = () => {
		dispatch(changeImg(picture.url))
	}

	// TODO: need creace Ui component with iframe with url
	// TODO: fixced arr creacte new arr in slice [...arr][...newarr] if -1 [...newarr][...arr]

	return (
		<div className={styles.small__photo} onClick={clickHandler}>
			{picture.media_type === 'video' ? (
				<iframe
					width='560'
					height='315'
					src={picture.url}
					title='YouTube video player'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				></iframe>
			) : (
				<img className={styles.img} src={picture.url} alt={picture.title} />
			)}
		</div>
	)
}

export default PictureSmall
