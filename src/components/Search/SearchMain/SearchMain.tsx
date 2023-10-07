import { SearchMainProps } from './SearchMain.type'

import SearchMainImg from './SearchMainImg/SearchMainImg'

import styles from './SearchMain.module.css'

const SearchMain = ({ item }: SearchMainProps) => {
	
	let description = item.data[0].title
	let media_type = item.data[0].media_type

	return media_type === 'image' ? (
		<div className={styles.container}>
			{item.links.map(el => (
				<SearchMainImg el={el} key={el.href} description={description} />
			))}
		</div>
	) : (
		<></>
	)
}

export { SearchMain }
