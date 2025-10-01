'use client';
import { useI18n } from '../../hooks/useI18n';

export const LangSelect = () => {
	const { lang, changeLang, availableLangs } = useI18n();

	const handleChange = (event) => {
		changeLang(event.target.value);
	};

	return (
		<select
			id="lang-select"
			value={lang}
			onChange={handleChange}
			className="lang-select p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
		>
			{availableLangs.map((l) => (
				<option key={l} value={l}>
					{l.toUpperCase()}
				</option>
			))}
		</select>
	);
};
