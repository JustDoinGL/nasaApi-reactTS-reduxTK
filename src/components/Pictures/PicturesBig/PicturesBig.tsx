import { useAppDispatch } from '../../../hooks/redux'
import { useKeyPress } from '../../../hooks/useKeyPress'

import { changeClick, fetchPictures } from '../../../store/pictures/picturesSlice'

import { PicturesBigProps } from './PicturesBig.type'

import { LeftGallery, RightGallery } from '../../../svg'
import { RenderMedia } from '../../../UI'

import styles from './PicturesBig.module.css'

const PicturesBig = ({ picture, setIsOpen }: PicturesBigProps) => {
  const dispatch = useAppDispatch()
  const left = useKeyPress('ArrowLeft')
  const right = useKeyPress('ArrowRight')

  const handleArrowClick = (index: number) => {
    dispatch(fetchPictures(1))
    dispatch(changeClick(index))
  }

  const handlePictureClick = () => {
    setIsOpen(true)
  }

  if (left) {
    handleArrowClick(-1)
  }

  if (right) {
    handleArrowClick(1)
  }

  return (
    <div className={styles.head}>
      <div className={styles.svg} onClick={() => handleArrowClick(-1)}>
        <LeftGallery />
      </div>
      <div className={styles.photo} onClick={handlePictureClick}>
        <RenderMedia picture={picture} />
      </div>
      <div className={styles.svg} onClick={() => handleArrowClick(1)}>
        <RightGallery />
      </div>
    </div>
  )
}

export default PicturesBig