import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Register");
    }

    async getHtml(){
        return `

        <header class="masthead mb-auto">
            <div class="inner">
                <h3 class="masthead-brand">CookUni</h3>
                <nav class="nav nav-masthead justify-content-center">
                    <a class="nav-link" href="/" data-link>Return Home</a>
                </nav>
            </div>
        </header>

        <div id="notifications">
                <div id="successBox" class="alert alert-success" role="alert">{Success Message...}</div>
                <div id="loadingBox" class="alert alert-info" role="alert">Loading...</div>
                <div id="errorBox" class="alert alert-danger" role="alert">{Error Message...}</div>
            </div>


        
        <footer class="mastfoot mt-5 text-center text-light">
            <div class="inner">
                <p>Made with &hearts; by <a href="/">CookUni</a>.</p>
            </div>
        <i class="fa fa-heart"></i>
        </footer>`; 
    }
}