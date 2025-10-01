'use client';

import React, { createContext, useState, useEffect, useCallback } from 'react';
import { ASSET_URLS } from '../utils/data';
import { translations } from '../utils/i18n';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	// Theme State
	const [theme, setTheme] = useState('light-mode');
	// I18n State
	const [lang, setLang] = useState('fr');
	// Asset & Loading State
	const [assetsLoaded, setAssetsLoaded] = useState(false);
	const [loadingComplete, setLoadingComplete] = useState(false);

	// Theme Logic
	useEffect(() => {
		const savedTheme = localStorage.getItem('theme') || 'light-mode';
		setTheme(savedTheme);
	}, []);

	useEffect(() => {
		document.body.className = theme;
		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === 'light-mode' ? 'dark-mode' : 'light-mode'));
	};

	// Asset Loading Logic
	const loadAssets = useCallback(() => {
		let loadedCount = 0;
		const totalAssets = ASSET_URLS.length;

		if (totalAssets === 0) {
			setAssetsLoaded(true);
			return;
		}

		ASSET_URLS.forEach((url) => {
			const img = new Image();
			img.onload = () => {
				loadedCount++;
				if (loadedCount === totalAssets) {
					setAssetsLoaded(true);
				}
			};
			img.onerror = () => {
				loadedCount++;
				console.log('Failed to load asset:', url);
				if (loadedCount === totalAssets) {
					setAssetsLoaded(true);
				}
			};
			img.src = url;
		});
	}, []);

	useEffect(() => {
		loadAssets();
	}, [loadAssets]);

	// AOS & Initialization Logic
	useEffect(() => {
		AOS.init({
			once: true,
			duration: 1000,
		});
	}, []);

	// Set loading complete once assets are loaded (Simulate 1.5s minimum load time)
	useEffect(() => {
		if (assetsLoaded) {
			const timer = setTimeout(() => {
				setLoadingComplete(true);
				AOS.refresh();
			}, 1500);
			return () => clearTimeout(timer);
		}
	}, [assetsLoaded]);

	// I18n Logic
	const t = (key) => translations[lang][key] || key;
	const availableLangs = Object.keys(translations);
	const changeLang = (newLang) => {
		if (availableLangs.includes(newLang)) {
			setLang(newLang);
		}
	};

	const value = {
		// Theme
		theme,
		toggleTheme,
		// I18n
		lang,
		t,
		changeLang,
		availableLangs,
		// Loading & Assets
		assetsLoaded,
		loadingComplete,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
