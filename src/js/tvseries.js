import './film-list'

import $ from 'jquery'

import {
    BASE_URL,
    API_KEY
} from './api';

const discover = () => {
    const filmListElement = document.querySelector("film-list");

    $.ajax({
        type: "GET",
        url: `${BASE_URL}/trending/tv/day?api_key=${API_KEY}`,
        success: function (res) {
            console.log(res)
            filmListElement.films = res.results;
        },
        error: function (error) {
            console.log(error)
        }
    })
}

export default discover;