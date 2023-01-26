class CardElement extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});

    }
    static get observedAttributes(){
        return ["img", "title", "price", "description", "collection"];
    }
    attributeChangedCallback(attr, oldVal, newVal){
        if(newVal !== oldVal)
            this[attr] = newVal;
    }
    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML = `
        <article>
            <div class="product-view">
                <span>Nike</span>
                <img class="product-view__img" src="${this.img}" alt="article">
            </div>
            <div class="product-info">
                <h2 class="product-info__name">
                    ${this.title}
                </h2>
                <p class="product-info__reference">
                    ${this.collection}
                </p>
                <p class="product-info__description">
                    ${this.description}
                </p>
                <div class="product-info__price">
                    <p class="price">${this.price}</p>
                    <buttom class="btn-buy">Buy Now</buttom>
                </div>   
            </div>  
        </article>
        ${this.getStyle()}
        `;
        return template;
    }
    getStyle(){
        return `
            <style> 
                :host {
                    --primary-color: #4854a0;
                    --button-color: #4755a1;
                    --name-color: #404b91;
                    --text-color2: #a1a1a1;
                }
                .product-view {
                    width:100%;
                    height:300px;
                    position: relative;
                    background-color: var(--primary-color);
                }
                .product-view span{
                    font-size: 130px;
                    font-weight: 700px;
                    opacity: 30%;
                }
                .product-view__img {
                    width: 300px;
                    height: 200px;
                    max-width: 300px;
                    min-width:200px;
                    position: absolute;
                    left: calc(50% - 150px);
                    bottom: -45px;
                    object-fit: cover;
                }
                
                .product-info {
                    margin: 0 8px;
                   
                }
                .product-info__reference {
                    font-weight: 700;
                    color: var(--text-color2);
                    text-transform: uppercase;
                }
                .product-info__price {
                    padding: 0 8px 10px 8px; 
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .price {
                    margin: 0;
                    font-size: 30px;
                    color: var(--text-color2);
                }
                .btn-buy {
                    padding:10px 12px;
                    border-radius: 16px;
                    font-weight: 700;
                    color: white;
                    background-color: var(--button-color);
                    text-transform: uppercase;
                }
                @media (min-width: 768px) {
                    article {
                        width: 100%; 
                        height: 400px;   
                        display: flex;
                    }
                    .product-view {
                        width:50%;
                        height: 100%;
                    }
                    .product-view__img {
                        width: 500px;
                        height: 250px;
                        max-width: 500px;
                        min-width:260px;
                        top: 100px;
                        right: 10px;
                        left:auto;
                        bottom: 10px;
                        transform: rotate(-20deg)
                    }
                    .product-info {
                        width: 50%;
                        display: flex;
                        flex-direction: column;
                    }
                    .product-info__price {
                        padding: 60px 8px 10px 8px; 
                    }
                }
            </style>
        `;
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
   
    connectedCallback(){
        console.log("hola")
        this.render();
    }

}

customElements.define("cart-component", CardElement);



