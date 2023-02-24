export {};

declare global {
    interface Window {
        page: {} | any;
        content: {};
        changePageContent: () => void;
    }
}
