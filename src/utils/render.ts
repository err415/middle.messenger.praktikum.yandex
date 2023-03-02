import Component from "../services/Component";

function render(query: string, component: Component ) {
    const root: HTMLElement | null  = document.querySelector(query);
    (root as HTMLElement).appendChild(component.getContent() as HTMLElement);
    component.dispatchComponentDidMount();
    return root;
}
export default render;
