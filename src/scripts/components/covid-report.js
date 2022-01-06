import css from 'bootstrap/dist/css/bootstrap.min.css';
import customCss from '../../style/style.css';

class CovidReportItem extends HTMLElement{

    set reportItem(item){
        this._reportItem = item;
        this.render();
    }

    render(){
        console.log(css);
        const searchElement = document.querySelector("search-bar");
        const dateUpdated = new Date(this._reportItem.lastUpdate);
        const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        this.innerHTML = '';
        this.innerHTML = `
                                    <style>
                                        ${css}
                                        ${customCss}
                                    </style>
                                    <div class="container mt-5">
                                        <div class="row flex-column-reverse flex-lg-row">
                                            <div class="col-lg-8">
                                                <div class="row text-white align-items-center">
                                                    <div class="col-12 col-lg-4">
                                                        <div class="card text-center bg-confirmed">
                                                            <div class="card-body">
                                                            <h4 class="card-title">${this._reportItem.confirmed.value}</h4>
                                                            <p class="card-text tex-dark-green">Confirmed</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-lg-4 my-3 my-lg-0">
                                                        <div class="card text-center bg-recovered">
                                                            <div class="card-body">
                                                            <h4 class="card-title">${this._reportItem.recovered.value}</h4>
                                                            <p class="card-text tex-dark-green">Recovered</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-lg-4">
                                                        <div class="card text-center bg-death">
                                                            <div class="card-body">
                                                            <h4 class="card-title">${this._reportItem.deaths.value}</h4>
                                                            <p class="card-text tex-dark-green">Deaths</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 text-white report text-center text-lg-left mt-3 my-lg-0 mb-4">
                                                <h3>Daily <span class="text-red-light">Report</span></h3>
                                                <p class="text-white">
                                                    The report of COVID-19 case in ${searchElement.value}. Last data update on ${monthNames[dateUpdated.getMonth()]} ${dateUpdated.getDate()}, ${dateUpdated.getFullYear()}.
                                                </p>
                                            </div>
                                        </div>
                                    </div>`;
    }
}

customElements.define('covid-report',CovidReportItem);