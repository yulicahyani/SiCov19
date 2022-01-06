class FooterContent extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `<div class="container text-center mt-4">
                            <p class="footer">&copy; 2021. SiCov19 by Ni Made Yuli Cahyani.</p>
                        </div>`;
    }
}

customElements.define('footer-content',FooterContent);