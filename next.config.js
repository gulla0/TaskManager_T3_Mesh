/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
    webpack: (config) => {
      config.experiments = {
        ...config.experiments,
        asyncWebAssembly: true,
        topLevelAwait: true,
        layers: true,
      };
      config.output.webassemblyModuleFilename = 'static/wasm/[modulehash].wasm';
    
      // This is needed for Webpack to work with WASM
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
  
      return config;
    },
  };
  
  export default config;
  
