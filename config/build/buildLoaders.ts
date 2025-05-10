import webpack from 'webpack';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { buildFileLoaders } from './loaders/buildFileLoaders';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/i,
        use: ['@svgr/webpack', 'url-loader'],
    };

    const cssLoader = buildCssLoaders(isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const fileLoader = buildFileLoaders();

    return [fileLoader, svgLoader, typescriptLoader, cssLoader];
}
