import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

import { changeImg, fetchPictures, getPicturesSelector } from '../../../redux/pictures/picturesSlice'

import { PicturesSmallProps } from './PictureSmall.type'

import { RenderMedia } from '../../../UI'

import styles from './PictureSmall.module.css'

export const PictureSmall = ({ picture }: PicturesSmallProps) => {
	const dispatch = useAppDispatch()
	const { picturesArr } = useAppSelector(getPicturesSelector)

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

