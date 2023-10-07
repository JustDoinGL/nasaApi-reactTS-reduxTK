import { useAppDispatch } from '../../../hooks/redux'

import {
	changeClick,
	fetchPictures
} from '../../../store/pictures/picturesSlice'

import { PicturesBigProps } from './PicturesBig.type'

import { LeftGallery, RightGallery } from '../../../svg'

import Iframe from '../../../UI/Iframe/Iframe'

import styles from './PicturesBig.module.css'

const PicturesBig = ({ picture, setIsOpen }: PicturesBigProps) => {
	const dispatch = useAppDispatch()

	const { url, title, media_type } = picture || {}

	const handleClickArrow = (index: number) => {
		dispatch(fetchPictures(1))
		dispatch(changeClick(index))
	}

	const handleClickPicture = () => {
		setIsOpen(true)
	}

	const renderMedia = () => {
		if (media_type === 'video') {
			return <Iframe url={url} />
		} else {
			return <img className={styles.img} src={url} alt={title} />
		}
	}

	return (
		<div className={styles.container__head}>
			<div className={styles.side__svg} onClick={() => handleClickArrow(-1)}>
				<LeftGallery />
			</div>
			<div className={styles.big__photo} onClick={handleClickPicture}>
				{renderMedia()}
			</div>
			<div className={styles.side__svg} onClick={() => handleClickArrow(1)}>
				<RightGallery />
			</div>
		</div>
	)
}

export default PicturesBig
