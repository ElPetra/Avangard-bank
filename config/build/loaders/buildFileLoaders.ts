export function buildFileLoaders() {
    return {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        type: 'asset/resource',
        generator: {
            filename: '[path][name].[hash].[ext]',
        },
        use: [
            {
                loader: 'image-webpack-loader',
                options: {
                    mozjpeg: {
                        progressive: true,
                        quality: 65,
                    },
                    optipng: {
                        enabled: false,
                    },
                    pngquant: {
                        quality: [0.65, 0.9],
                        speed: 4,
                    },
                    gifsicle: {
                        interlaced: false,
                    },
                    webp: {
                        quality: 75,
                    },
                },
            },
        ],
    };
}
