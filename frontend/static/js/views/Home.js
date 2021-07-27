import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml(){
        return `

            <header class="masthead mb-auto">
                
                <div class="inner">
                    <h3 class="masthead-brand">CookUni</h3>
                    <nav class="nav nav-masthead justify-content-center">
                        <a class="nav-link" href="/userHome" data-link>User Home</a>
                        <a class="nav-link" href="/recipes" data-link>Share recipe</a>
                        <a class="nav-link" href="/logout" data-link>Logout</a>
                        <a class="nav-link" href="/login" data-link>Login</a>
                        <a class="nav-link" href="/register" data-link>Register</a>
                    </nav>
                </div>
            </header>

            <div id="notifications">
                <div id="successBox" class="alert alert-success" role="alert">{Success Message...}</div>
                <div id="loadingBox" class="alert alert-info" role="alert">Loading...</div>
                <div id="errorBox" class="alert alert-danger" role="alert">{Error Message...}</div>
            </div>

            <main role="main" class="inner cover mt-5">
                <h1 class="cover-heading">Coooooking University</h1>
                    <p class="lead">They say that food passes through the stomach, we say that food passes through CookUni...
                    </p>
            </main>

            <footer class="mastfoot mt-5 text-center text-light">
                <div class="inner">
                    <p>Made with &hearts; by <a href="#/home">CookUni</a>.</p>
                </div>
                <i class="fa fa-heart"></i>
            </footer>
    `; 
    }
}