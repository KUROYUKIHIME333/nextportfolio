import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const Button = ({ children, href, type = 'cta', download, ...otherProperties }) => {
	const router = useRouter();

	const typeValue = () => {
		if (href) {
			return 'button';
		} else {
			return 'submit';
		}
	};

	const linkRedirection = () => {
		if (href) {
			router.push(href);
		}
	};

	if ((type = 'downloadCV')) {
		return (
			<Link href={`/documents/CV_Daniel_Ramazani.pdf`} download="CV_Daniel_Ramazani.pdf" className="cta-button" {...otherProperties}>
				{children}
			</Link>
		);
	}

	if ((type = 'downloadEFSET')) {
		return (
			<Link href={`/documents/EF SET Certificate.pdf`} download="Daniel_RAMAZANI_EF_SET_Certificate.pdf" className="cta-button" {...otherProperties}>
				{children}
			</Link>
		);
	}

	return (
		<button type={typeValue} onClick={linkRedirection} className={'cta-button'} download={download} {...otherProperties}>
			{children}
		</button>
	);
};
