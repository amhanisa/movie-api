import {
    BASE_URL,
    API_KEY
} from './api';
import $ from 'jquery';

class DataSource {
    static getTrending() {
        return $.ajax({
            type: "GET",
            url: `${BASE_URL}/trending/all/day?api_key=${API_KEY}`,
            success: function (res) {
                return Promise.resolve(res.results);
            },
            error: function (error) {
                return Promise.reject('yaah')
            }
        })
    }
}

export default DataSource;