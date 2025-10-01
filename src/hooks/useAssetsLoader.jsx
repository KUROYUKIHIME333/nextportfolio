import { useContext } from 'react';
import { AppContext } from '../contexts/AppProvider';

export const useAssetLoader = () => {
	const { assetsLoaded, loadingComplete } = useContext(AppContext);
	return { assetsLoaded, loadingComplete };
};
