import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function BuildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
        // Проксирование запросов в режиме разработки если флаг !__IS_DEV__
        proxy: {
            '/api': {
                target: 'http://172.17.1.100:9000',
                changeOrigin: true,
                secure: false,
                pathRewrite: { '^/api': '' },
            },
        },
    };
}
