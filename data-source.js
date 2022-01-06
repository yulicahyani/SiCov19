class DataSource {
    static async searchReport(keyword) {
        const response = await fetch(`https://covid19.mathdro.id/api/countries/${keyword}`);
        const responseJson = await response.json();
        if (responseJson) {
            return Promise.resolve(responseJson);
        } else {
            return Promise.reject(`${keyword} is not found`);
        }
    }
}

export default DataSource;