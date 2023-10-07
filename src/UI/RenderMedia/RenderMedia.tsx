import { IPictures } from '../../interface/pictures'

import Iframe from '../Iframe/Iframe'

import { RenderMediaProps } from './RenderMedia.type'

import styles from './RenderMedia.module.css'

const RenderMedia = ({ picture }: RenderMediaProps) => {
  const { media_type, url, title } = picture as IPictures

  if (media_type === 'video') {
    return <Iframe url={url as string} />
  } else {
    return <img className={styles.img} src={url as string} alt={title as string} />
  }
}

export default RenderMedia