class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
       .search-container {
           margin: auto;
           margin-top: 70px;
           margin-bottom: 70px;
           max-width: 800px;
           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           padding: 16px;
           border-radius: 5px;
           display: flex;
           top: 10px;
           background-color: white;
       }
      
       .search-container > input {
           width: 75%;
           padding: 16px;
           border: 0;
           border-bottom: 1px solid #3D989B;
           font-weight: bold;
       }
      
       .search-container > input:focus {
           outline: 0;
           border-bottom: 2px solid #3D989B;
       }
      
       .search-container > input:focus::placeholder {
           font-weight: bold;
       }
      
       .search-container >  input::placeholder {
           color: #3D989B;
           font-weight: normal;
       }
      
       .search-container > button {
           width: 23%;
           cursor: pointer;
           margin-left: auto;
           padding: 16px;
           background-color: #3D989B;
           color: white;
           border: 0;
           text-transform: uppercase;
       }
      
       @media screen and (max-width: 550px){

           .search-container{
               margin: 10px;
           }
      
           .search-container > input {
               width: 100%;
               margin-bottom: 8px;
               padding: 5px;
           }
      
           .search-container > button {
               width: 20%;
               margin-left: 4px;
               padding: 5px;
           }
       }
       </style>
       <div id="search-container" class="search-container">
           <input placeholder="Search covid case report of a country" id="searchElement" type="search">
           <button id="searchButtonElement" type="submit">Search</button>
       </div>
       `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);