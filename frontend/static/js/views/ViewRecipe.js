import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("View Recipe");
    }

    async getHtml(){

        //fetch data for recipe
        // await fetch(`https://cookinguni-e696f-default-rtdb.firebaseio.com/${id}.json`)
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data);
        // });
        let recipeId = window.localStorage.getItem('recipeKey');

        return await fetch(`https://cookinguni-e696f-default-rtdb.firebaseio.com/${recipeId}.json`)
        .then(response => response.json())
        .then(data => {
            
            let dataObjectTwo = { response: data};

            var foodTemplateTwo = `

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


            <div class="row form-layout p-5">
                <div class="col-md-12">
                    <div class="recepieInfo">
                        <div class="detailsFoodImage">
                            <img src="{{response.foodImageURL}}"
                                alt="">
                        </div>

                        <div class="infoPack">
                            <h3 class="my-3">{{response.meal}}</h3>
                            <p class="prep-method">{{response.prepMethod}}</p>
                            <p class="description">{{response.description}}</p>
                        </div>
                    
                        <div class="actions">
                            <a class="btn btn-danger" id="archive-button" href="#">Archive</a>
                            <a class="btn btn-info" href="/edit">Edit</a>
                            <a class="btn btn-success" href="#">{{response.likesCounter}} likes</a>
                        </div>
                      
                    </div>

                    <div class="detailsIngredients">
                        <h3 class="my-3 ingredient">Ingredients</h3>
                        <ul>
                            {{#each response.ingredients}}
                            <li>{{this}}</li>
                            {{/each}}
                        </ul>
                    </div>
                </div>
            </div>
        
            


            <footer class="mastfoot mt-5 text-center text-light">
                <div class="inner">
                    <p>Made with &hearts; by <a href="#/home">CookUni</a>.</p>
                </div>
                <i class="fa fa-heart"></i>
            </footer>`; 
        console.log(dataObjectTwo);
        var foodItem = Handlebars.compile(foodTemplateTwo);
        return foodItem(dataObjectTwo);
    
        });
        

        
    
    }
    
}