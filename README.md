# ![alt logo](https://github.com/absharma9796/fresh-stock/blob/master/web/public/fslogo.svg)

### A modern and responsive e-commerce web application with infinite scroll and dark mode 🚀

## Tech Stack
**Frontend** - NextJS, Typescript, Redux, TailwindCss, Framer-Motion, react-infinite-scroll-component

**Backend** - NextJS native server

## Screenshots

Landing Page             |  Shopping Page               | Cart Page
:-------------------------:|:-------------------------:|:-------------------------:
![](https://github.com/absharma9796/fresh-stock/blob/master/web/public/landing.png)  |  ![](https://github.com/absharma9796/fresh-stock/blob/master/web/public/shop.png) | ![](https://github.com/absharma9796/fresh-stock/blob/master/web/public/cart.png)

## Installation

**FreshStock** requires [Node.js](https://nodejs.org/)  >= v14.17.6 to run.
Install the dependencies and devDependencies and start the server.

```sh
cd web
yarn install
yarn dev
```

For production environments...

```sh
yarn build
yarn start
```

## Folder Structure

All the `source code` related to Frontend can be found inside
`/web/src` folder

1. `src/component` contains all the components for business logic
2. `src/dataTypes` contains interfaces / types for base objects, e.g User, Dataset, DataPoint. 
   as well as actual data files in `json` format e.g. users.json, datasets.json 
3. `src/pages` contains all route pages for application
4. `src/redux` contains all redux related files
5. `src/utils` contains utility functions

