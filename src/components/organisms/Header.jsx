'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { NAV_LINKS } from '../../utils/data';
import { NavLink } from '../molecules/NavLink';
import { LangSelect } from '../molecules/LangSelect';
import { ThemeToggle } from '../molecules/ThemeToggle';
import { useIsMobile } from '../../hooks/useScreenIsMobile';

export const Header = () => {
	const router = useRouter();
	const isMobile = useIsMobile();
	const [isMenuVisible, setIsMenuVisible] = useState(true);

	const handleMenuToggle = () => {
		if (isMobile) {
			setIsMenuVisible((prev) => !prev);
		} else {
			router.push('/');
		}
	};

	return (
		<header className="header sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-sm transition-colors">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-7xl">
				<h1 className="logo text-2xl font-bold text-blue-600 dark:text-blue-400" onClick={handleMenuToggle}>
					Daniel Ramazani
				</h1>

				{((isMobile && isMenuVisible) || (!isMobile && isMenuVisible) || (!isMobile && !isMenuVisible)) && (
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
				)}
			</div>
		</header>
	);
};
