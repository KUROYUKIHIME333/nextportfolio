import { useRouter } from 'next/navigation';

export const Button = ({ children, href, type = 'cta', download, ...otherProperties }) => {
	const router = useRouter();

	return (
		<button
			type={() => {
				if (href) {
					return 'button';
				} else {
					return 'submit';
				}
			}}
			onClick={() => {
				if (href) {
					router.push(href);
				}
			}}
			className={'cta-button'}
			download={download}
			{...otherProperties}
		>
			{children}
		</button>
	);
};
