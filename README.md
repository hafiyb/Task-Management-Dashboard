Task Management Dashboard is a Next.js [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) as a part of Lemmy's software engineer assessment for Hafiy Basir.

## Running locally

Create an .env file at the root directory of the cloned repository with the following variables:

If running backend server locally:
```bash
NEXT_PUBLIC_API_URL = 'http://localhost:1337/api'
NEXT_PUBLIC_API_TOKEN = '77b77ba445566729a7c37a62d302e3146c879cc9eeb860c211e30cc280e3f480dca2e15e5f542466f7baea46b799471e7691710871de63f55cb1c036724b422df800f32d745ad9d877d69a6a13f267152ec2c9be424e43f7f6e0da7d648929005743e742add166b1357c05de168cb25630499db8d23b8c9360a726028da2ec5c'
```

note: if using NEXT_PUBLIC_API_TOKEN returns a 403 error, a new API token might be needed to run correctly. To generate a new token, run the Strapi server locally then access Settings >> API Tokens >> Create New API Token with the following details : 
```bash
Name : basic
Token duration : Unlimited
Token type : custom

Permissions :
Task >> Select all
```

and Save, replace value of NEXT_PUBLIC_API_TOKEN with newly generated API Token.

---
If using deployed Strapi Cloud:
```bash
NEXT_PUBLIC_API_URL = 'https://valuable-dogs-8ec9eafe3f.strapiapp.com/api'
NEXT_PUBLIC_API_TOKEN = 'c718c42610cbc8f03efe35566dce63f5f1af2f35dbc6c6250c19009901eb2ddc302c6ff9499e0193a701a8bbcff69d4d52c659f462d39c67dfcb3a924d58dd65775fd28fd582182dd7867e5cebcf7bb9b76228a93c88a7567e692f66398e36605d4e15e1bfb1e362e1f6dbc41a660face670e003ff44e9632872d87afa9ad2ac'
```

---

To run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project is deployed on Vercel and accessible through this link: https://task-management-dashboard-kohl.vercel.app/

The backend for this project is created on Strapi, available on github through this link: https://github.com/hafiyb/Task-Management-Dashboard-Api
And hosted on Strapi cloud on 14-day free trial. (deployed on 12/1/2024)
To run the backend server locally, clone the backend repository and run:
```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```


## Addtional Notes

This project also utilizes Storybook for reusable component documentation and sandbox

To run Storybook server:
```bash
npm run storybook
# or
yarn storybook
# or
pnpm storybook
# or
bun storybook
```

The Storybook can then be accessed through [http://localhost:6006](http://localhost:6006) on your browser

---
---

This project utilizes the following packages:
- Redux Toolkit
- RTK Query
- Storybook
- Tailwind

Planned development || TODO:
- add more loading state
- task card drag-and-drop functionality
- add dark theme
- refactor page.js
- edit task card




