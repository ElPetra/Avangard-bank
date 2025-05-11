// import webpack from 'webpack';
// import path from 'path';
// import { buildWebpackConfig } from './config/build/buildWebpackConfig';
// import { BuildEnv, BuildPaths } from './config/build/types/config';

// export default (env: BuildEnv) => {
//     const paths: BuildPaths = {
//         entry: path.resolve(__dirname, 'src', 'index.tsx'),
//         build: path.resolve(__dirname, 'build'),
//         html: path.resolve(__dirname, 'public', 'index.html'),
//         src: path.resolve(__dirname, 'src'),
//         // public: path.resolve(__dirname, 'public'),
//         public: '',
//     };

//     const mode = env.mode || 'development';
//     const PORT = env.port || 3000;

//     const isDev = mode === 'development';

//     const config: webpack.Configuration = buildWebpackConfig({
//         mode,
//         path: paths,
//         isDev,
//         port: PORT,
//     });

//     return config;
// };
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/config';

export function buildWebpackConfig(
    options: BuildOptions,
): webpack.Configuration {
    const { mode, path: paths, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: '[name].[contenthash].js',
            clean: true,
            publicPath: 'Avangard-bank', // ЗАМЕНИ на название твоего репозитория!
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(png|jpg|gif|svg)$/i,
                    type: 'asset/resource',
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: paths.html,
                publicPath: 'Avangard-bank', // тоже обязательно
            }),
            new webpack.DefinePlugin({
                IS_DEV: JSON.stringify(isDev),
            }),
        ],
        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev
            ? { port: options.port, open: true, historyApiFallback: true }
            : undefined,
    };
}
