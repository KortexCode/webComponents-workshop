class CardElement extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});

    }

    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML = `
        <article>
            <div class="product-view">
                <span>Nike</span>
                <img class="product-view__img" src="/proyecto/assets/nike-blue.png" alt="article">
            </div>
            <div class="product-info">
                <h2 class="product-info__name">
                    Nike Zoom 2023
                </h2>
                <p class="product-info__reference">
                   Running Collection
                </p>
                <p class="product-info__description">
                    when an unknown printer took a galley of type and scrambled     it to make a type specimen book. It has survived not only   five centuries, but also the leap into electronic     typesetting, remaining essentially unchanged. It was    popularised in the 1960s with the release of Letraset sheets   containing Lorem Ipsum passages, and more recently with   desktop publishing software like Aldus PageMaker including    versions of Lorem Ipsum.
                </p>
                <div class="product-info__price">
                    <p class="price">$250,00</p>
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



