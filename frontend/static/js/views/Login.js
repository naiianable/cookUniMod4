import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Login");
    }

    async getHtml(){
        return `

            <header class="masthead mb-auto">
                
                <div class="inner">
                    <h3 class="masthead-brand">CookUni</h3>
                    <nav class="nav nav-masthead justify-content-center">
                        <a class="nav-link" href="/" data-link>Home</a>
                        <a class="nav-link" href="/recipes" data-link>Share recipe</a>
                        <a class="nav-link" href="/logout" data-link>Logout</a>
                        <a class="nav-link" href="/register" data-link>Register</a>
                    </nav>
                </div>
            </header>

            <div id="notifications">
                <div id="successBox" class="alert alert-success" role="alert">{Success Message...}</div>
                <div id="loadingBox" class="alert alert-info" role="alert">Loading...</div>
                <div id="errorBox" class="alert alert-danger" role="alert">{Error Message...}</div>
            </div>

            <form class="text-center p-5 form-layout" action="#" method="POST">

            <p class="h4 mb-4">Sign in</p>

            <input type="text" id="defaultRegisterFormUsername" name="username" class="form-control mb-4"
                placeholder="Username">

            <input type="password" id="defaultRegisterFormPassword" name="password" class="form-control"
                placeholder="Password">
            <hr>

            <button class="btn btn-danger w-25 m-auto my-4 btn-block" type="submit">Sign in</button>

        </form>

            <footer class="mastfoot mt-5 text-center text-light">
                <div class="inner">
                    <p>Made with &hearts; by <a href="#/home">CookUni</a>.</p>
                </div>
                <i class="fa fa-heart"></i>
            </footer>
    `; 
    }
}