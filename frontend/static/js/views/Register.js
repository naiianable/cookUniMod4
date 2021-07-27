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
                    <a class="nav-link" href="/" data-link>Home</a>
                    <a class="nav-link" href="/userHome" data-link>User Home</a>
                    <a class="nav-link" href="/recipes" data-link>Share recipe</a>
                    <a class="nav-link" href="/logout" data-link>Logout</a>
                    <a class="nav-link" href="/login" data-link>Login</a>
                </nav>
            </div>
        </header>

        <div id="notifications">
                <div id="successBox" class="alert alert-success" role="alert">{Success Message...}</div>
                <div id="loadingBox" class="alert alert-info" role="alert">Loading...</div>
                <div id="errorBox" class="alert alert-danger" role="alert">{Error Message...}</div>
            </div>

        <form class="text-center p-5 form-layout" action="#" method="POST">
            <p class="h4 mb-4">Sign up</p>
            <div class="form-row mb-4">
                <div class="col">

                    <input type="text" id="defaultRegisterFormFirstName" class="form-control" name="firstName"
                    placeholder="First name">
                </div>
                <div class="col">

                    <input type="text" id="defaultRegisterFormLastName" class="form-control" name="lastName"
                    placeholder="Last name">
                </div>
            </div>

            <input type="text" id="defaultRegisterFormUsername" class="form-control mb-4" name="username"
            placeholder="Username">
            <input type="password" id="defaultRegisterFormPassword" class="form-control" name="password"
            placeholder="Password">
            <hr>
            <input type="password" id="defaultRegisterRepeatPassword" class="form-control" name="repeatPassword"
            placeholder="Repeat Password">

            <button class="btn btn-danger my-4 btn-block w-25 m-auto" id="register-button" type="button">Sign up</button>

        </form>
        
        <footer class="mastfoot mt-5 text-center text-light">
            <div class="inner">
                <p>Made with &hearts; by <a href="/">CookUni</a>.</p>
            </div>
        <i class="fa fa-heart"></i>
        </footer>`; 
    }
}