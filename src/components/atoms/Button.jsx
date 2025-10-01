import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const Button = ({ children, href, type = 'cta', download, ...otherProperties }) => {
	const router = useRouter();
	const typeClasses = type === 'cta' ? 'cta-button' : '';

	if (href) {
		return (
			<button onClick={() => router.push(href)} className={`${typeClasses} `} download={download} {...otherProperties}>
				{children}
			</button>
		);
	}

	return (
		<button type="submit" className={`${typeClasses}`} {...otherProperties}>
			{children}
		</button>
	);
};
