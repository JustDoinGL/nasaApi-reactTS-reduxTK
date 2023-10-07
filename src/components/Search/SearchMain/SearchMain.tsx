import { SearchMainProps } from './SearchMain.type'

import SearchMainImg from './SearchMainImg/SearchMainImg'

import styles from './SearchMain.module.css'

const SearchMain = ({ item }: SearchMainProps) => {
	const { title, media_type } = item.data[0]

	if (media_type === 'image') {
		return (
			<div className={styles.container}>
				{item.links.map(el => (
					<SearchMainImg
						el={el}
						key={el.href}
						description={title}
						item={item.data}
					/>
				))}
			</div>
		)
	} else {
		return null
	}
}

export { SearchMain }
