import { Store } from '@/store';// path to store file

declare module '@vue/runtime-core' {
    // declare your own store states
    interface State {
        count: number
    }

    interface ComponentCustomProperties {
        $store: Store;
    }
}

