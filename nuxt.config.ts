const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;

export default defineNuxtConfig({
    builder: 'webpack',
    nitro: {
        preset: 'aws-lambda',
        serveStatic: true,
        prerender: {
            crawlLinks: true,
        }
    },
    webpack: {
        plugins: [
            // new ModuleFederationPlugin({
            //     name: "nav",
            //     filename: "remoteEntry.js",
            //     remotes: {},
            //     exposes: {
            //         "./Header": "./src/Header",
            //     },
            //     shared: {
            //         ...deps,
            //         react: {
            //             singleton: true,
            //             requiredVersion: deps.react,
            //         },
            //         "react-dom": {
            //             singleton: true,
            //             requiredVersion: deps["react-dom"],
            //         },
            //     },
            // }),
            // new HtmlWebpackPlugin({
            //     template: "./public/index.html",
            //     chunks: ["main"],
            // }),
        ],
    }
})
