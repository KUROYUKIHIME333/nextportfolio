'use client';
import { useAssetLoader } from '../../hooks/useAssetsLoader';

export const LoadingScreen = () => {
	const { loadingComplete } = useAssetLoader();

	if (loadingComplete) return null;

	return (
		<div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition-opacity duration-700 ease-in-out">
			<div className="spinner-container">
				<div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
			</div>
			<p className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Chargement des assets...</p>
		</div>
	);
};
