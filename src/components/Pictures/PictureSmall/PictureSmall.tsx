import { PicturesSmallProps } from './PictureSmall.type'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { changeImg, fetchPictures } from '../../../store/pictures/picturesSlice'

import styles from './PictureSmall.module.css'
import Iframe from '../../../UI/Iframe/Iframe'

const PictureSmall = ({ picture }: PicturesSmallProps) => {
	const dispatch = useAppDispatch()
	const { picturesArr } = useAppSelector(store => store.pictures)

	const clickHandler = () => {
		const index = picturesArr.findIndex(p => p.url === picture.url)
		dispatch(changeImg(picture.url))
		dispatch(fetchPictures(index))
	}

	return (
		<div className={styles.small__photo} onClick={clickHandler}>
			{picture.media_type === 'video' ? (
				<Iframe url={picture.url} />
			) : (
				<img className={styles.img} src={picture.url} alt={picture.title} />
			)}
		</div>
	)
}

export default PictureSmall
