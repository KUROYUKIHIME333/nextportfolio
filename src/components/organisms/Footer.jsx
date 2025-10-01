'use client';
import { Icon } from '../atoms/Icon';
import { useI18n } from '../../hooks/useI18n';

export const Footer = () => {
	const { t } = useI18n();

	return (
		<footer className="footer bg-gray-100 dark:bg-gray-800 py-6 transition-colors">
			<div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row justify-between items-center text-sm">
				<p className="text-gray-600 dark:text-gray-400 mb-3 md:mb-0">{t('footer_text')}</p>
				<div className="social-links flex space-x-4">
					<a
						href="https://www.linkedin.com/in/daniel-hermann-ramazani-521786232/"
						target="_blank"
						aria-label="LinkedIn"
						className="text-2xl text-blue-700 hover:text-blue-500 dark:text-blue-300 dark:hover:text-blue-500 transition-colors"
					>
						<Icon name="linkedin" type="brand" />
					</a>
					<a
						href="https://github.com/KUROYUKIHIME333"
						target="_blank"
						aria-label="GitHub"
						className="text-2xl text-gray-800 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100 transition-colors"
					>
						<Icon name="github" type="brand" />
					</a>
				</div>
			</div>
		</footer>
	);
};
