# BBOX-front

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).

## References

- metamask 官方文件

  - https://docs.metamask.io/guide/ethereum-provider.html
  - https://docs.metamask.io/guide/rpc-api.html

- [nuxt-web3](https://github.com/bl0cknumber/nuxt-web3/blob/master/example/pages/index.vue)

- web3.js

  - [web3.js 官方文件](https://web3js.readthedocs.io/en/v1.7.0/web3-eth-contract.html)
  - [如何取得當前 network id](https://web3js.readthedocs.io/en/v1.2.11/web3-eth-net.html)
  - [NUXT - web3.js - Metamask 實作範例](https://blog.benjaminazoulay.com/connect-to-your-nuxt-app-with-metamask-using-web3js)
  - [web3.js 範例](https://ithelp.ithome.com.tw/articles/10278789)
  - 用 web3.eth.Contract 與 ABI 互動
    - https://betterprogramming.pub/build-your-first-dapp-with-web3-js-9a7306d16a61
    - https://coursetro.com/posts/code/99/Interacting-with-a-Smart-Contract-through-Web3.js-

- ethers.js

  - [用 ethers.Contract 與 ABI 互動](https://javascript.plainenglish.io/fullstack-nft-minting-dapp-using-next-js-hardhat-ethers-js-alchemy-metamask-and-tailwindcss-145e0ef41d26)

- Bootstrap
  - [carousel](https://getbootstrap.com/docs/4.1/components/carousel)
  - [buttons](https://getbootstrap.com/docs/4.0/components/buttons)
