import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';

(global as any).__IS_DEV__ = true;

global.matchMedia =
    global.matchMedia ||
    function (query: string) {
        return {
            matches: false,
            media: query,
            onchange: null,
            addListener() {},
            removeListener() {},
            addEventListener() {},
            removeEventListener() {},
            dispatchEvent(): boolean {
                return true;
            },
        } as unknown as MediaQueryList;
    };
