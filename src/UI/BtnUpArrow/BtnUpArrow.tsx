import { ArrowTop } from '../../assets/svg'

const BtnUpArrow = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	return (
		<div onClick={scrollToTop}>
			<ArrowTop />
		</div>
	)
}

export default BtnUpArrow
