import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

import { changeImg, fetchPictures } from '../../../store/pictures/picturesSlice'

import { PicturesSmallProps } from './PictureSmall.type'

import Iframe from '../../../UI/Iframe/Iframe'

import styles from './PictureSmall.module.css'

const PictureSmall = ({ picture }: PicturesSmallProps) => {
	const dispatch = useAppDispatch()
	const { picturesArr } = useAppSelector(store => store.pictures)

	const clickHandler = () => {
		const index = picturesArr.findIndex(p => p.url === picture.url)
		dispatch(changeImg(picture.url))
		dispatch(fetchPictures(index))
	}

	const renderMedia = () => {
		if (picture.media_type === 'video') {
			return <Iframe url={picture.url} />
		} else {
			return (
				<img className={styles.img} src={picture.url} alt={picture.title} />
			)
		}
	}

	return (
		<div className={styles.small__photo} onClick={clickHandler}>
			{renderMedia()}
		</div>
	)
}

export default PictureSmall
