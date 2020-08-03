import './film-item';

class FilmList extends HTMLElement {
    connectedCallback() {
        if (this._films) {
            this.render();
        } else {
            this.renderError();
        }
    }

    render() {
        this.innerHTML = "";
        this.className = "row";
        this._films.forEach(film => {
            console.log(film)
            const filmItemElement = document.createElement("film-item");
            filmItemElement.film = film;
            this.appendChild(filmItemElement);
        })
    }

    renderError() {
        this.innerHTML = "Yahh ga ada data"
    }

    set films(films) {
        this._films = films;
        this.render()
    }
}

customElements.define("film-list", FilmList);