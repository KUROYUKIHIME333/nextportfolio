import { useContext } from 'react';
import { AppContext } from '../contexts/AppProvider';

export const useI18n = () => {
	const { lang, t, changeLang, availableLangs } = useContext(AppContext);
	return { lang, t, changeLang, availableLangs };
};
