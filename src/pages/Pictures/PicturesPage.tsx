import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { useEffect } from 'react'

import {
	changeClick,
	changeImg,
	fetchPictures
} from '../../store/pictures/picturesSlice'

import { Error, Loader } from '../../UI'
import { PictureSmall } from '../../components/Pictures'

import { LeftGallery, RightGallery } from '../../svg'

import styles from './PicturesPage.module.css'

const PicturesPage = () => {
	const dispatch = useAppDispatch()
	const { status, picturesArr } = useAppSelector(state => state.pictures)

	useEffect(() => {
		dispatch(fetchPictures(7))
	}, [dispatch])

	const handleClickPage = (index: number) => {
		dispatch(changeClick(index))
		dispatch(fetchPictures(index))
	}

	// const handleImageChange = (index: number) => {
	// 	dispatch(changeImg(index))
	// 	dispatch(fetchPictures(index))
	// };

	if (status === 'pending') {
		return (
			<div className={styles.container__helper}>
				<Loader />
			</div>
		)
	}

	if (status === 'rejected') {
		return (
			<div className={styles.container__helper}>
				<Error />
			</div>
		)
	}

	const { url, title, media_type } = picturesArr?.[0] || {}

	return (
		<>
			<div className={styles.container__head}>
				<div className={styles.side__svg}>
					<LeftGallery />
				</div>
				<div className={styles.big__photo}>
					{media_type === 'video' ? (
						<iframe
							width='560'
							height='315'
							className={styles.img}
							src={url}
							title='YouTube video player'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						></iframe>
					) : (
						<img className={styles.img} src={url} alt={title} />
					)}
				</div>
				<div className={styles.side__svg} onClick={() => handleClickPage(1)}>
					<RightGallery />
				</div>
			</div>

			<div className={styles.container}>
				{picturesArr &&
					picturesArr.slice(1).map(picture => {
						return <PictureSmall picture={picture} key={picture.url} />
					})}
			</div>
		</>
	)
}

export default PicturesPage
