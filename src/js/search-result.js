class SearchResult extends HTMLElement {
    connectedCallback() {
        // if (this._films) {
        //     this.render()
        // } else {
        //     this.renderError()
        // }
    }

    render() {
        this.innerHTML = "";
        this._films.forEach(film => {
            const searchItem = document.createElement('div')
            searchItem.className = "search-item"
            searchItem.innerHTML = `
            <div class="search-poster">
            <a href="./detail.html?id=${film.id}&type=${film.media_type}">
            <img src="https://image.tmdb.org/t/p/w500${film.poster_path}" alt="">
            </a>
            </div>
            <div class="search-detail">
            <a href="./detail.html?id=${film.id}&type=${film.media_type}">
            <span class="font-weight-bold">${film.title || film.original_name}</span>
            </a>
            <span class="text-white">
            &nbsp; ${film.release_date.substring(0,4)}
            </span>
            <p class="d-none d-md-block search-desc">
            ${this.truncateString(film.overview, 300)}
            </p>
            </div>
            `

            this.appendChild(searchItem)
        })
    }

    renderError(keyword) {
        this.innerHTML = `
        <h1 class="text-white text-center">No result for "${keyword}"</h1>
        `;
    }

    set films(films) {
        this._films = films
        this.render()
    }

    truncateString(str, num) {
        if (str.length <= num) {
            return str
        }
        return str.slice(0, num) + '...'
    }

}

customElements.define('search-result', SearchResult)