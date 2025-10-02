'use client';
import { useState, useEffect } from 'react';
const BREAKPOINT_WIDTH = 901;

export const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState(() => {
		if (typeof window !== 'undefined') {
			return window.innerWidth < BREAKPOINT_WIDTH;
		}
		return false;
	});

	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}
		const handleResize = () => {
			const newIsMobile = window.innerWidth < BREAKPOINT_WIDTH;

			setIsMobile(newIsMobile);
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return isMobile;
};
