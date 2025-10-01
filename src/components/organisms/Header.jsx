'use client';
import Link from 'next/link';
import { NAV_LINKS } from '../../utils/data';
import { NavLink } from '../molecules/NavLink';
import { LangSelect } from '../molecules/LangSelect';
import { ThemeToggle } from '../molecules/ThemeToggle';

export const Header = () => {
	return (
		<header className="header sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-sm transition-colors">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-7xl">
				<Link href="/" className="logo text-2xl font-bold text-blue-600 dark:text-blue-400">
					Daniel Ramazani
				</Link>
				<div className="nav-controls flex items-center space-x-6">
					<nav className="nav hidden md:flex space-x-6">
						{NAV_LINKS.map((link) => (
							<NavLink key={link.href} href={link.href} translationKey={link.key} />
						))}
					</nav>
					<div className="control-group flex items-center space-x-3">
						<LangSelect />
						<ThemeToggle />
					</div>
				</div>
			</div>
		</header>
	);
};
