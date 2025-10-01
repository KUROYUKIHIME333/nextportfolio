'use client';
import { useTheme } from '../../hooks/useTheme';
import { Icon } from '../../components/atoms/Icon';

export const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme();

	const iconName = theme === 'light-mode' ? 'moon' : 'sun';

	return (
		<button
			id="theme-toggle"
			onClick={toggleTheme}
			className="theme-toggle text-xl p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-yellow-400 transition-colors"
			aria-label="Changer le thème"
		>
			<Icon name={iconName} />
		</button>
	);
};
