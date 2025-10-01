/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.ibb.co',
				port: '',
				pathname: '/**', // Autoriser tous les chemins sur ce domaine
			},
		],
	},
};

export default nextConfig;
