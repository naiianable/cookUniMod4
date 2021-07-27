import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Edit Recipe");
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

            <form class="text-center p-5 form-layout" action="#" method="PATCH" id="edit-receipt-form">
            <p class="h4 mb-4">Edit Recipe</p>
        
            <input type="text" id="defaultRecepieEditMeal" name="meal" class="form-control mb-4" placeholder="Meal"
                value="">
        
            <input type="text" id="defaultRecepieEditIngredients" name="ingredients" class="form-control mb-4"
                placeholder="Ingredients" value="">
        
            <textarea type="text" id="defaultRecepieEditMethodOfPreparation" name="prepMethod" class="form-control mb-4"
                placeholder="Method of preparation"></textarea>
        
            <textarea type="text" id="defaultRecepieEditDescription" name="description" class="form-control mb-4"
                placeholder="Description"></textarea>
        
            <input type="text" id="defaultRecepieEditFoodImageURL" name="foodImageURL" class="form-control mb-4"
                placeholder="Food Image URL..." value="">
        
            <select name="category" select="">
                <option selected>Select category...</option>
                <option>Vegetables and legumes/beans</option>
                <option>Fruits</option>
                <option>Grain Food</option>
                <option>Milk, cheese, eggs and alternatives</option>
                <option>Lean meats and poultry, fish and alternatives</option>
            </select>
            <button class="btn btn-danger w-25 m-auto my-4 btn-block" id="edit-button" type="button">Edit it</button>
        
        </form>
        
        <footer class="mastfoot mt-5 text-center text-light">
            <div class="inner">
                <p>Made with &hearts; by <a href="#/home">CookUni</a>.</p>
            </div>
            <i class="fa fa-heart"></i>
        </footer>`; 
    }
}