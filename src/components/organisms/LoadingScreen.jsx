'use client';
import { useAssetLoader } from '../../hooks/useAssetsLoader';

export const LoadingScreen = () => {
	const { loadingComplete } = useAssetLoader();

	if (loadingComplete) return null;

	return (
		<div className="loader-container dark-mode">
			<div className="tore-spinner"></div>
		</div>
	);
};
