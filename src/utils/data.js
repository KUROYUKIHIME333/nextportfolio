// URLs à pré-charger
export const ASSET_URLS = [
	'https://i.ibb.co/Z6Wrg0Fj/portrait.jpg', // Portrait
	'https://i.ibb.co/bLcwD5s/minilink.png', // Projet 1
	'https://i.ibb.co/x82BWLJH/firebase-Delete.png', // Projet 2
	'https://i.ibb.co/jvn6kVrT/firebase-Collection-Modify.png', // Projet 3
	'https://i.ibb.co/FbxWCPQs/gps-Simulator.png', // Projet 4
	'https://i.ibb.co/21srsZsL/Capture-d-cran-136.png', // Projet 5
	'https://i.ibb.co/0GGqLFS/shimri.png', // Projet 6
	'https://i.ibb.co/rfLpMhw4/Capture-d-cran-135.png', // Projet 7
];

export const PROJECTS_DATA = [
	{
		key: 'project1',
		imgUrl: 'https://i.ibb.co/bLcwD5s/minilink.png',
		link: 'https://url-shortner-express-basic.onrender.com/',
		isDev: false,
	},
	{
		key: 'project5',
		imgUrl: 'https://i.ibb.co/x82BWLJH/firebase-Delete.png',
		link: 'https://firestore-delete.onrender.com/',
		isDev: false,
	},
	{
		key: 'project6',
		imgUrl: 'https://i.ibb.co/jvn6kVrT/firebase-Collection-Modify.png',
		link: 'https://firebase-collection-modify.onrender.com/',
		isDev: false,
	},
	{
		key: 'project7',
		imgUrl: 'https://i.ibb.co/FbxWCPQs/gps-Simulator.png',
		link: 'https://gps-simulator-xo99.onrender.com',
		isDev: false,
	},
	{
		key: 'project2',
		imgUrl: 'https://i.ibb.co/21srsZsL/Capture-d-cran-136.png',
		link: 'https://craftsconnect.onrender.com/',
		isDev: true,
	},
	{
		key: 'project3',
		imgUrl: 'https://i.ibb.co/0GGqLFS/shimri.png',
		link: '#',
		isDev: true,
	},
	{
		key: 'project4',
		imgUrl: 'https://i.ibb.co/rfLpMhw4/Capture-d-cran-135.png',
		link: '#',
		isDev: false,
	},
];

export const NAV_LINKS = [
	{ href: '/', key: 'nav_home' },
	{ href: '/projects', key: 'nav_projects' },
	{ href: '/cv', key: 'nav_cv' },
	{ href: '/contact', key: 'nav_contact' },
];

export const CV_SKILLS = ['Next.js', 'React', 'Redux Toolkit', 'Node.js', 'Express', 'AdonisJS', 'PostgreSQL', 'Firebase', 'Google Cloud', 'UML', 'Design Patterns', 'Maintenance Industrielle'];
