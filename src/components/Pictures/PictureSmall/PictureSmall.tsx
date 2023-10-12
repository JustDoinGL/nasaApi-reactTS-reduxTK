import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

import { changeImg, fetchPictures } from '../../../store/pictures/picturesSlice'

import { PicturesSmallProps } from './PictureSmall.type'

import { RenderMedia } from '../../../UI'

import styles from './PictureSmall.module.css'

const PictureSmall = ({ picture }: PicturesSmallProps) => {
	const dispatch = useAppDispatch()
	const { picturesArr } = useAppSelector(store => store.pictures)

	const clickHandler = () => {
		const index = picturesArr.findIndex(p => p.url === picture.url)
		dispatch(changeImg(picture.url))
		dispatch(fetchPictures(index))
	}

	return (
		<div className={styles.photo} onClick={clickHandler}>
			<RenderMedia picture={picture} />
		</div>
	)
}

export default PictureSmall
