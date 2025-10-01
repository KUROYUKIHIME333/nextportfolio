import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useI18n } from '../../hooks/useI18n';

export const NavLink = ({ href, translationKey }) => {
	const { t } = useI18n();
	const pathname = usePathname();

	// To determine if the link is active (also use '/')
	const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));

	const classes = `nav-link transition-colors ${isActive ? 'active font-bold text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300'}`;

	return (
		<Link href={href} className={classes}>
			{t(translationKey)}
		</Link>
	);
};
