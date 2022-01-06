import '../scripts/components/navbar.js';
import '../scripts/components/search-bar.js';
import './components/header.js';
import './components/footer.js';
import './components/covid-report.js';
import DataSource from '../scripts/data/data-source.js';

const main = () => {
    const covidReportElement = document.querySelector('covid-report');
    const searchElement = document.querySelector("search-bar");

    const onButtonSearchClicked = async () => {
        try{
            const result = await DataSource.searchReport(searchElement.value);
            renderResult(result);
        } catch (message){
            showMessage(message)
        }
    };

    const renderResult =  results => {
        covidReportElement.reportItem = results;
    };

    const showMessage = (message) =>{
        alert(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;