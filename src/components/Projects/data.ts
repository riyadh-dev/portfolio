import imageSources from '~/image-sources';

const PROJECTS = [
	{
		name: 'Social Media App',
		links: [
			'https://social-media-app-production.up.railway.app',
			'https://social-media-app-eoga.onrender.com/',
		],
		repo: 'https://github.com/riyadh-dev/social-media-app',
		thumbnail: imageSources.projects['social-media-app'][5],
		images: imageSources.projects['social-media-app'],
		tags: [
			'ReactJS',
			'ExpressJS',
			'MongoDB',
			'MUI',
			'WebSockets',
			'Typescript',
			'RecoilJS',
			'React Router',
			'React Query',
		],
	},

	{
		name: 'Online Store',
		links: ['https://e-commerce-app-self.vercel.app/'],
		repo: 'https://github.com/riyadh-dev/e-commerce-app',
		thumbnail: imageSources.projects['e-commerce-app'][0],
		images: imageSources.projects['e-commerce-app'],
		tags: ['NextJS', 'TailwindCSS', 'Typescript', 'Stripe', 'RecoilJS'],
	},

	{
		name: 'Airbnb Clone (work in progress...)',
		links: ['https://airbnb-clone-rust-omega.vercel.app/'],
		repo: 'https://github.com/riyadh-dev/airbnb-clone',
		thumbnail: imageSources.projects['airbnb-clone'][1],
		images: imageSources.projects['airbnb-clone'],
		tags: [
			'NextJS',
			'Typescript',
			'TailwindCSS',
			'Next-auth',
			'Jotai',
			'Drizzle',
			'Prisma',
		],
	},

	{
		name: 'Instant Messaging App',
		links: [
			'https://messaging-app.up.railway.app',
			'https://messaging-app-2b7q.onrender.com',
		],
		repo: 'https://github.com/riyadh-dev/messaging-app',
		thumbnail: imageSources.projects['messaging-app'][1],
		images: imageSources.projects['messaging-app'],
		tags: [
			'ReactJS',
			'ExpressJS',
			'MongoDB',
			'MUI',
			'WebSockets',
			'Typescript',
			'RecoilJS',
			'React Router',
			'React Query',
		],
	},

	{
		name: 'Dashboard (frontend only)',
		links: ['https://dashboard-nextjs-weld.vercel.app/'],
		repo: 'https://github.com/riyadh-dev/dashboard-nextjs',
		thumbnail: imageSources.projects['dashboard-nextjs'][0],
		images: imageSources.projects['dashboard-nextjs'],
		tags: ['NextJS', 'Typescript', 'RecoilJS', 'TailwindCSS', 'Tremor'],
	},

	{
		name: 'Scientific Consul Management System',
		links: ['https://scms-client.netlify.app/'],
		repo: 'https://github.com/riyadh-dev/scms-client',
		thumbnail: imageSources.projects['scms'][1],
		images: imageSources.projects['scms'],
		tags: ['ReactJS', 'ExpressJS', 'MongoDB', 'MUI', 'GraphQL'],
	},

	{
		name: 'Card Matching Game',
		links: [
			'https://riyadh-dev.github.io/memory-matching-game/',
			'https://riyadh-dev-memory-matching-game.netlify.app/',
		],
		repo: 'https://github.com/riyadh-dev/memory-matching-game',
		thumbnail: imageSources.projects['memory-matching-game'][0],
		images: imageSources.projects['memory-matching-game'],
		tags: ['ReactJS', 'PreactJS', 'Typescript', 'ViteJS', 'CSS'],
	},

	{
		name: 'Portfolio (Solid / Preact / Vanilla)',
		links: ['https://riyadh-dev.github.io/portfolio'],
		repo: 'https://github.com/riyadh-dev/portfolio',
		thumbnail: imageSources.projects['portfolio-website-image'][0],
		images: imageSources.projects['portfolio-website-image'],
		tags: ['SolidJS', 'PreactJS', 'Typescript', 'ViteJS', 'VitePWA', 'CSS'],
	},

	{
		name: 'Authentication Demo',
		links: [
			'https://authentication-demo.up.railway.app/',
			'https://authentication-demo-jqhr.onrender.com/',
		],
		repo: 'https://github.com/riyadh-dev/authentication-demo',
		thumbnail: imageSources.projects['authentication-demo'][0],
		images: imageSources.projects['authentication-demo'],
		tags: [
			'ReactJS',
			'Chakra UI',
			'Typescript',
			'ExpressJS',
			'MongoDB',
			'CSURF',
			'HTTPOnly cookies',
		],
	},

	{
		name: 'Portfolio (Vanilla JS)',
		links: ['https://riyadh-dev.github.io/portfolio-website'],
		repo: 'https://github.com/riyadh-dev/portfolio-website',
		thumbnail: imageSources.projects['portfolio-website-image'][3],
		images: imageSources.projects['portfolio-website-image'],
		tags: ['HTML', 'Typescript', 'SASS', 'ParcelJS'],
	},

	{
		name: 'IEC101 Master Sim',
		links: [
			'https://github.com/riyadh-dev/iec101-master-sim/releases/download/v1.0.0/IEC101MasterSim.exe',
		],
		repo: 'https://github.com/riyadh-dev/iec101-master-sim',
		thumbnail: imageSources.projects['iec101-master-sim'][1],
		images: imageSources.projects['iec101-master-sim'],
		tags: ['.NET', 'WPF', 'C#', 'XAML', 'IEC 60870-5-101'],
	},
];

export default PROJECTS;
