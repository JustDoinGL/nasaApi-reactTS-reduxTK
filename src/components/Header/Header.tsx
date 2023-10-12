import { NavLink } from 'react-router-dom'

import img from '../../img/NASA_logo.png'

import styles from './Header.module.css'

import { HeaderProps } from './Header.type'

const Header = ({ data }: HeaderProps) => {

	return (
		<header className={styles.container}>
			<div className={styles.logo}>
				<NavLink to={`/`}>
					<img src={img} alt='Logo Nasa' />
				</NavLink>
			</div>
			<nav>
				<ul className={styles.links}>
					{data.map(link => {
						return (
							<li key={link.url}>
								<NavLink
									to={`${link.url}`}
									className={({ isActive }) =>
										isActive ? styles.active : styles.link
									}
								>
									{link.name}
								</NavLink>
							</li>
						)
					})}
				</ul>
			</nav>
		</header>
	)
}

export default Header
