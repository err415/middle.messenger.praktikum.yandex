function render(query: string, component: any) {
    const root : HTMLElement | null = document.querySelector(query);
    root!.appendChild(component.getContent());
    component.dispatchComponentDidMount();
    return root;
}
export default render;
