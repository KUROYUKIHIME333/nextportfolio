'use client';
import { useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme';

const PARTICLE_CONFIG_BASE = {
	particles: {
		number: { value: 60, density: { enable: true, value_area: 800 } },

		shape: { type: 'circle' },
		opacity: { value: 0.5, random: false },
		size: { value: 3, random: true },
		move: { enable: true, speed: 4, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false },
	},
	interactivity: {
		detect_on: 'canvas',
		events: { onhover: { enable: true, mode: 'repulse' } },
	},
	retina_detect: true,
};

// Fonction pour initialiser/mettre à jour les particules
const initializeParticles = (color) => {
	// Si particles.js n'est pas encore chargé, on s'arrête
	if (typeof window === 'undefined' || !window.particlesJS) return;

	const tagId = 'particles-js';

	// 1. Détruire l'ancienne instance si elle existe (pour changer la couleur)
	if (window.pJSDom && window.pJSDom.length > 0) {
		// En l'absence d'une méthode 'destroy' directe dans la version 2.0.0,
		// on retire simplement l'élément canvas pour forcer la reconstruction.
		const container = document.getElementById(tagId);
		if (container) {
			const canvas = container.querySelector('canvas');
			if (canvas) {
				canvas.remove();
			}
		}
	}

	// 2. Préparer la configuration complète avec la nouvelle couleur
	const updatedConfig = {
		...PARTICLE_CONFIG_BASE,
		particles: {
			...PARTICLE_CONFIG_BASE.particles,
			color: { value: color },
			line_linked: { enable: true, distance: 150, color: color, opacity: 0.5, width: 1 },
		},
	};

	// 3. Initialiser une nouvelle instance
	window.particlesJS(tagId, updatedConfig);
};

export const ParticlesBG = () => {
	const { theme } = useTheme();

	useEffect(() => {
		// 1. Déterminer la couleur basée sur le thème
		const color = theme === 'dark-mode' ? '#60a5fa' : '#2563eb';

		// 2. Initialiser ou mettre à jour les particules avec la bonne couleur
		initializeParticles(color);

		// Le cleanup est important pour éviter les fuites de mémoire si le composant est démonté
		return () => {
			// Tentative de destruction propre lors du démontage
			if (window.pJSDom && window.pJSDom.length > 0) {
				const container = document.getElementById('particles-js');
				if (container) {
					const canvas = container.querySelector('canvas');
					if (canvas) {
						canvas.remove();
					}
				}
			}
		};
	}, [theme]);

	return (
		<>
			{/* 1. Conteneur des particules (Doit exister pour particlesJS) */}
			<div id="particles-js" className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"></div>
			{/* 2. Overlay pour contrôler l'opacité et lier au fond du thème */}
			<div
				className="background-overlay fixed top-0 left-0 w-full h-full z-10 opacity-70 transition-colors"
				// gestion de la double couche
				style={{
					backgroundColor: 'var(--light-primary)',
					opacity: theme === 'dark-mode' ? '0.25' : '0.30', // Ajustement de l'opacité
				}}
			></div>
		</>
	);
};
