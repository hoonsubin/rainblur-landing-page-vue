// details can be found here https://github.com/vitejs/vite/blob/master/src/node/config.ts
export default {
  vueCustomBlockTransforms: {
    i18n: ({ code }) => {
      // return transformed code
    }
  },
  //https: true,
  base: 'public'
}