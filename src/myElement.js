const template = document.createElement("div");
template.innerHTML = `
    <p>Me gusta wow</p>
`;

//HTMLElement es la web Api que nos ayuda a contruir un "custom element"
class myElement extends HTMLElement{
    constructor(){
        super();
        this.p = document.createElement("p");
    }

    connectedCallback(){
        this.p.textContent = "Hola world of warcraft";
        this.appendChild(this.p);
        this.appendChild(template);
    }
}

customElements.define("my-component-test", myElement);