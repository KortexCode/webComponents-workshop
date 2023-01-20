//HTMLElement es la web Api que nos ayuda a contruir un "custom element"
class myElement extends HTMLElement{
    constructor(){
        super();
        console.log("Aflición")
    }
}

customElements.define("my-component-test", myElement);