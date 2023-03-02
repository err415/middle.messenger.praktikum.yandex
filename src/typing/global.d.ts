export {};

declare global {
    interface Window {
        page: unknown;
        content: unknown;
        changePageContent: () => void;
    }
}
