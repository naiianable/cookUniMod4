import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Share Recipes");
    }

    async getHtml(){

        


        return `
            <header class="masthead mb-auto">
                
                <div class="inner">
                    <h3 class="masthead-brand">CookUni</h3>
                    <nav class="nav nav-masthead justify-content-center">
                        <a class="nav-link" href="/" data-link>Home</a>
                        <a class="nav-link" href="/userHome" data-link>User Home</a>
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

        <form class="text-center p-5 form-layout" action="/recipes" id="share-receipt-form" method="POST">
            <p class="h4 mb-4">Share Recipe</p>

            <input type="text" id="defaultRecepieShareMeal" name="meal" class="form-control mb-4" placeholder="Meal">

            <input type="text" id="defaultRecepieShareIngredients" name="ingredients" class="form-control mb-4"
                placeholder="Ingredients">

            <textarea type="text" id="defaultRecepieShareMethodOfPreparation" name="prepMethod"
                class="form-control mb-4" placeholder="Method of preparation"></textarea>

            <textarea type="text" id="defaultRecepieShareDescription" name="description" class="form-control mb-4"
                placeholder="Description"></textarea>

            <input type="text" id="defaultRecepieShareFoodImageURL" name="foodImageURL" class="form-control mb-4"
                placeholder="Food Image URL...">

            <select name="category">
                <option selected>Select category...</option>
                <option selected>Vegetables and legumes/beans</option>
                <option selected>Fruits</option>
                <option selected>Grain Food</option>
                <option selected>Milk, cheese, eggs and alternatives</option>
                <option selected>Lean meats and poultry, fish and alternatives</option>
            </select>

            <button class="btn btn-danger w-25 m-auto my-4 btn-block" id="share-button" type="button">Share it</button>
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