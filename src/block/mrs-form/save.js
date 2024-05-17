import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ 'Mrs Form – hello from the saved content!' }
		</p>
	);
}
