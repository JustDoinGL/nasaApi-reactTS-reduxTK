import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { useEffect, useState } from 'react'

import { fetchPictures, getPicturesSelector } from '../../redux/pictures/picturesSlice'

import { PictureSmall, PicturesBig } from '../../components/Pictures'

import { LoadError, Modal } from '../../UI'

import styles from './PicturesPage.module.css'

const PicturesPage = () => {
	const dispatch = useAppDispatch()
	const { status, picturesArr } = useAppSelector(getPicturesSelector)
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		if (picturesArr.length === 0) {
			dispatch(fetchPictures(7))
		}
	}, [])

	if (status === 'pending' || status === 'rejected') {
		return (
			<div className={styles.helper}>
				<LoadError status={status} />
			</div>
		)
	}

	return (
		<div className={styles.main}>
			{isOpen && <Modal setIsOpen={setIsOpen} picture={picturesArr[0]} />}
			<PicturesBig picture={picturesArr[0]} setIsOpen={setIsOpen} />
			<div className={styles.container}>
				{picturesArr &&
					picturesArr.slice(1).map(picture => {
						return <PictureSmall picture={picture} key={picture.url} />
					})}
			</div>
		</div>
	)
}

export default PicturesPage 
