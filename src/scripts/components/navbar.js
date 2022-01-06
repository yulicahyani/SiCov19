import logo2 from '../../image/logo2.png';

class Navbar extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `<nav class="navbar justify-content-center p-3">
                            <a href="index.html" class="text-decoration-none">
                                <img src="${logo2}" class="img-logo">
                            </a>
                        </nav>`;
    }
}

customElements.define('nav-bar',Navbar);