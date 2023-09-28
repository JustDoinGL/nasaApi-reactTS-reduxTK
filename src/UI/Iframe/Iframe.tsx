import { IframeProps } from './Iframe.type'

const Iframe = ({ url }: IframeProps) => {
	return (
		<iframe
			width='100%'
			height='100%'
			src={url}
			title='YouTube video player'
		></iframe>
	)
}

export default Iframe
