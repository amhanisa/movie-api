class Footer extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.className = "bg-dark d-block"
        this.innerHTML = `
        <div class="container p-3 py-lg-5">
            <div class="row justify-content-center">
                <h1 class="font-weight-bolder text-primary">TANI FILM</h1>
            </div>
            <div class="row justify-content-center">
                <p class="text-white">&copy; 2020 Azka Muhammad | API from&nbsp; <a href="https://themoviedb.org">themoviedb</a></p> 
            </div>
        </div>
        `
    }
}

customElements.define('footer-custom', Footer)