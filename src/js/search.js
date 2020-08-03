import './search-result'

import $ from 'jquery'

import {
    BASE_URL,
    API_KEY
} from './api';

const search = () => {
    const query = getUrlVars()
    console.log(query)

    const searchResult = document.querySelector('search-result')

    $.ajax({
        type: "GET",
        url: `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=true&query=${query.title}`,
        success: function (res) {
            console.log(res)
            if (res.results[0]) {
                searchResult.films = res.results
            } else {
                searchResult.renderError(query.title)
            }
        },
        error: function (error) {
            console.log(error)
            searchResult.renderError(query.title)
        }
    })
}

function getUrlVars() {
    var vars = [],
        hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        // vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

export default search;