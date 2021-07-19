module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    backendUrl: process.env.URL_BACK,
  },
};
