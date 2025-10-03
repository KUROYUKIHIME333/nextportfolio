import { Poppins } from 'next/font/google';
import { AppProvider } from '../contexts/AppProvider';
import { Header } from '../components/organisms/Header';
import { Footer } from '../components/organisms/Footer';
import { ParticlesBG } from '../components/organisms/ParticlesBg';
import './globals.css';
import Script from 'next/script';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '600', '700'] });

export const metadata = {
	title: 'Daniel Ramazani - Portfolio',
	description: 'Portfolio professionnel de Daniel RAMAZANI, Ingénieur technicien en Maintenance Industrielle et Développeur web.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="fr">
			<head>
				{/* Font Awesome for Icons */}
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
				<Script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js" strategy="beforeInteractive" />
			</head>
			<body className={poppins.className}>
				<AppProvider>
					<ParticlesBG />
					<div className="relative z-20">
						{/* What will be up to particles */}
						<Header />
						<main>{children}</main>
						<Footer />
					</div>
				</AppProvider>
			</body>
		</html>
	);
}
