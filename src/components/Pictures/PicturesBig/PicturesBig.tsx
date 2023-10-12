import { useAppDispatch } from '../../../hooks/redux'

import {
	changeClick,
	fetchPictures
} from '../../../store/pictures/picturesSlice'

import { PicturesBigProps } from './PicturesBig.type'

import { LeftGallery, RightGallery } from '../../../svg'

import { RenderMedia } from '../../../UI'

import styles from './PicturesBig.module.css'


const PicturesBig = ({ picture, setIsOpen }: PicturesBigProps) => {
	const dispatch = useAppDispatch()

	const handleClickArrow = (index: number) => {
		dispatch(fetchPictures(1))
		dispatch(changeClick(index))
	}

	const handleClickPicture = () => {
		setIsOpen(true)
	}

	return (
		<div className={styles.head}>
			<div className={styles.svg} onClick={() => handleClickArrow(-1)}>
				<LeftGallery />
			</div>
			<div className={styles.photo} onClick={handleClickPicture}>
				<RenderMedia picture={picture} />
			</div>
			<div className={styles.svg} onClick={() => handleClickArrow(1)}>
				<RightGallery />
			</div>
		</div>
	)
}

export default PicturesBig
