export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
    public: string;
}

export interface BuildOptions {
    mode: 'development' | 'production';
    path: BuildPaths;
    isDev: boolean;
    port: number;
}
