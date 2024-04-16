import bootstrap from '~/assets/images/logos/bootstrap.png'
import chakraUI from '~/assets/images/logos/chakra-ui.png'
import css from '~/assets/images/logos/css.png'
import html from '~/assets/images/logos/html.png'
import jotai from '~/assets/images/logos/jotai.png'
import javascript from '~/assets/images/logos/js.png'
import mui from '~/assets/images/logos/mui.svg'
import nextjs from '~/assets/images/logos/next.png'
import reactQuery from '~/assets/images/logos/react-query.svg'
import react from '~/assets/images/logos/react.svg'
import recoilJS from '~/assets/images/logos/recoil.png'
import sass from '~/assets/images/logos/sass.png'
import solidjs from '~/assets/images/logos/solid.svg'
import tailwind from '~/assets/images/logos/tailwind.svg'
import typescript from '~/assets/images/logos/ts.png'

import drizzle from '~/assets/images/logos/drizzle.png'
import express from '~/assets/images/logos/express.png'
import graphQL from '~/assets/images/logos/graphql.png'
import mongodb from '~/assets/images/logos/mongodb.svg'
import node from '~/assets/images/logos/node.png'
import postgresql from '~/assets/images/logos/postgres.png'
import trpc from '~/assets/images/logos/trpc.png'
import webSocket from '~/assets/images/logos/ws.png'

import csharp from '~/assets/images/logos/csharp.png'
import dotnet from '~/assets/images/logos/dotnet.svg'
import xaml from '~/assets/images/logos/xaml.png'

import parcelJS from '~/assets/images/logos/parcel.png'
import turborepo from '~/assets/images/logos/turborepo.svg'
import vitejs from '~/assets/images/logos/vite.png'

import backend from '~/assets/images/logos/backend.svg'
import desktop from '~/assets/images/logos/desktop.svg'
import frontend from '~/assets/images/logos/frontend.svg'
import other from '~/assets/images/logos/other.svg'

const SKILLS = [
	{
		catName: 'Web Frontend',
		catImage: frontend,
		skills: [
			{
				name: 'React',
				image: react,
			},
			{
				name: 'NextJS',
				image: nextjs,
			},
			{
				name: 'SolidJS',
				image: solidjs,
			},
			{
				name: 'React-Query',
				image: reactQuery,
			},
			{
				name: 'RecoilJS',
				image: recoilJS,
			},
			{
				name: 'Jotai',
				image: jotai,
			},
			{
				name: 'Tailwind',
				image: tailwind,
			},
			{
				name: 'MUI',
				image: mui,
			},
			{
				name: 'Bootstrap',
				image: bootstrap,
			},

			{
				name: 'Chakra UI',
				image: chakraUI,
			},
			{
				name: 'Typescript',
				image: typescript,
			},
			{
				name: 'Javascript',
				image: javascript,
			},
			{
				name: 'CSS',
				image: css,
			},
			{
				name: 'SASS',
				image: sass,
			},
			{
				name: 'HTML',
				image: html,
			},
		],
	},
	{
		catName: 'Web Backend',
		catImage: backend,
		skills: [
			{
				name: 'NodeJS',
				image: node,
			},
			{
				name: 'MongoDB',
				image: mongodb,
			},
			{
				name: 'Postgres',
				image: postgresql,
			},
			{
				name: 'Drizzle ORM',
				image: drizzle,
			},
			{
				name: 'ExpressJS',
				image: express,
				dark: true,
			},
			{
				name: 'GraphQL',
				image: graphQL,
			},
			{
				name: 'tRPC',
				image: trpc,
			},
			{ name: 'WebSockets', image: webSocket, dark: true },
		],
	},
	{
		catName: 'Desktop',
		catImage: desktop,
		skills: [
			{
				name: 'C#',
				image: csharp,
			},
			{
				name: 'XAML',
				image: xaml,
			},
			{
				name: '.NET',
				image: dotnet,
			},
			{
				name: 'WPF',
				image: xaml,
			},
			{
				name: 'WinForms',
				image: xaml,
			},
		],
	},
	{
		catName: 'Other Skills',
		catImage: other,
		skills: [
			{
				name: 'ParcelJS',
				image: parcelJS,
			},
			{
				name: 'ViteJS',
				image: vitejs,
			},
			{
				name: 'Turborepo',
				image: turborepo,
			},
		],
	},
]

export default SKILLS
