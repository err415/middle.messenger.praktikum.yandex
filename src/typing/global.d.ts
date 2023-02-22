export {};

declare global {
    interface Window {
        page: {};
        content: {};
        changePageContent: () => void;
    }
}
