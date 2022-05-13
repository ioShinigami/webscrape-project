# boilerplate-typescript-node

A simple node boilerplate made in typescript

> NOTE : A version using rust compiler [swc](https://swc.rs/) is available [here](https://github.com/maxgfr/typescript-swc-starter).

## Clone repository and install dependencies

```sh
git clone https://github.com/maxgfr/boilerplate-typescript-node # For cloning the repository
cd boilerplate-typescript-node # To navigate to the repository root
yarn # Install dependencies
cp .env.example .env
```

## Running the code

```sh
yarn build # For building the code
yarn start # For running the code builded
```

Or in `development` mode:

```sh
yarn dev # For running the code in development thanks to ts-node and nodemon
```

## Testing the code

```sh
yarn test # For running unit test
yarn test:watch # For watching unit test
```
