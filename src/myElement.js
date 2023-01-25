const template = document.createElement("div");
template.innerHTML = `
    <p>Me gusta wow</p>
`;

//HTMLElement es la web Api que nos ayuda a contruir un "custom element"
class myElement extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        /* this.titulo = this.getAttribute("titulo");
        this.parra1= this.getAttribute("parrafo");
        this.parra2 = this.getAttribute("parrafo2"); */
    }
    static get observedAttributes(){
        return ["titulo", "parrafo", "parrafo2"]
    }
    attributeChangedCallback(attr, oldVal, newVal){
        this[attr] = newVal;
    }
    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML = `
        <section>
            <h2>${this.titulo}</h2>
            <div>
                <p>${this.parrafo}</p>
                <p>${this.parrafo2}</p>
            </div>
            <div>
                <p class="pa1">
                    <slot name="parraf1"></slot>
                </p>
                <p class="pa2">
                    <slot name="parraf2"></slot>
                </p>
                <p class="pa1">
                    <slot name="parraf3">/slot>
                </p>
            </div>
        </section>
        ${this.getStyle()}
        `;
        return template;
    }
    getStyle(){
        return `
        <style>
            :host{
                --primary-color: tomato;
                --secondary-color: salmon;
                --heading-primary: 30px;
                --heading-secondary: 25px;
                display: inline-block;
                min-width:300px;
                max-width:450px;
                
            }
            section {
                background-color: var(--primary-color);
            }
            section div{
                background-color: var(--secondary-color);
            }
            h2 {
                font-size: var(--heading-primary);
                color: blue;
            }
            .pa1 {
                color: green;
            }
            .pa2 {
                color: red;
            }
        </style>`;
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
   
    connectedCallback(){
        console.log("hola")
        this.render();
    }
   /*  disconnectedCallback(){
        console.log("adios")
    
    } */
}

customElements.define("cart-component", myElement);

/* document.querySelector("my-component-test").remove(); */