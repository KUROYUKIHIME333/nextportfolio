import { useContext } from 'react';
import { AppContext } from '../contexts/AppProvider';

export const useTheme = () => {
	const { theme, toggleTheme } = useContext(AppContext);
	return { theme, toggleTheme };
};
