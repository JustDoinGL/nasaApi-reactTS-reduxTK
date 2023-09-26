import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { useEffect } from 'react'

import { fetchPictures } from '../../store/pictures/picturesSlice'

import { Error, Loader } from '../../UI'

import { LeftGallery, RightGallery } from '../../svg'

import styles from './PicturesPage.module.css'

// TODO: cкелитон и двойную загрузку убрать и получать опредленное количество картинок так же из макета взять высоту и ширину

const PicturesPage = () => {
	const dispatch = useAppDispatch()
	const { status, picturesArr } = useAppSelector(state => state.pictures)

	useEffect(() => {
		const fetchData2 = async () => {
			const data = 6
			await dispatch(fetchPictures(6))
		}
		fetchData2()
	}, [])
	if (status === 'pending') {
		return (
			<div  className={styles.container__helper}>
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
	return (
		<>
			<div className={styles.container}>
				<div className={styles.side__svg}>
					<LeftGallery />
				</div>
				<div className={styles.big__photo}>
					<img
						className={styles.img}
						src={picturesArr[0]?.url}
						alt={picturesArr[0]?.title}
					/>
				</div>
				<div className={styles.side__svg}>
					<RightGallery />
				</div>
			</div>

			<div className={styles.container}>
				{picturesArr?.map(el => {
					return (
						<div className={styles.small__photo}>
							<img className={styles.img} src={el.url} alt={el.title} />
						</div>
					)
				})}
			</div>
		</>
	)
}

export default PicturesPage
