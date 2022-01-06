import covid_ilustrasi from '../../image/covid_ilustrasi.png';

class HeaderContent extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `<div class="container mt-1 mt-md-2 mb-5">
                            <div class="row align-items-center">
                                <div class="col-12 col-lg-7 text-xs-center text-center text-lg-left">
                                    <h2 class="text-white pt-2">Case Report of <span class="text-red-light">COVID-19</span></h1>
                                    <p class="header-subtext text-white mt-3 mb-5 text-justify">
                                        Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus. Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment. However, some will become seriously ill and require medical attention.
                                    </p>
                                    <a href="https://www.who.int/health-topics/coronavirus" target="_blank" class="text-decoration-none d-inline-block">
                                        <h5 class="text-green">More about Covid-19</h5>
                                    </a>
                                </div>
                                <div class="col-12 col-lg-4 position-relative text-center">
                                    <img src="${covid_ilustrasi}" class="img-illustration">
                                </div>
                            </div>
                        </div>`;
    }
}

customElements.define('header-content',HeaderContent);