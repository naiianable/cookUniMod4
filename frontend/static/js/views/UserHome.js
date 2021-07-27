import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle(`Welcome {{user}}`);
    }

    async getHtml(){


         //fetch firebase data
        return await fetch(`https://cookinguni-e696f-default-rtdb.firebaseio.com/.json`)
        .then(tempResponse => tempResponse.json())
        .then(data => {

            //setting returned data into key:value pair 
            
            let dataObject = { response: data};
            if(!dataObject.response) {

                return `
                <header class="masthead mb-auto">
                    <div class="inner">
                        <h3 class="masthead-brand">CookUni</h3>
                        <nav class="nav nav-masthead justify-content-center">
                            <a class="nav-link" href="/" data-link>Home</a>                   
                            <a class="nav-link" href="/recipes" data-link>Share recipe</a>
                            <a class="nav-link" href="/logout" data-link>Logout</a>
    
                        </nav>
                    </div>
                </header>
                
                <div id='foodNotFound'>
                    <img src="https://t4.ftcdn.net/jpg/00/62/17/31/240_F_62173114_ozantkVtkPgzL0fxssAkTqKX1FHPr0UW.jpg" />
                    <h3>Food not found...</h3>
                </div>
                
                <footer class="mastfoot mt-5 text-center text-light">
                    <div class="inner">
                        <p>Made with &hearts; by <a href="#/home">CookUni</a>.</p>
                    </div>
                    <i class="fa fa-heart"></i>
                </footer>
            `
            } else {
                //loop through response
                //if response.category === specific food type, populate appropriate template with response
                //assign completed templates to a variable/variables?
                //render that on page???

                    var foodTemplate = `
                    <header class="masthead mb-auto">
                        <div class="inner">
                            <h3 class="masthead-brand">CookUni</h3>
                            <nav class="nav nav-masthead justify-content-center">
                                <a class="nav-link" href="/" data-link>Home</a>                   
                                <a class="nav-link" href="/recipes" data-link>Share recipe</a>
                                <a class="nav-link" href="/logout" data-link>Logout</a>
        
                            </nav>
                        </div>
                    </header>

                    {{#each response}}
                    {{#with this}}
                    <div class="col-lg-12">
                        <div class="our-team-main">
        
                            <div class="team-front">
                                <img src="{{categoryImageURL}}" />
                                <h3>{{meal}}</h3>
                                <p>{{category}}</p>
                            </div>
        
                            <div class="team-back">
                                <div class="back-side-info">
                                    <h4>Ingredients</h4>
                                    <ul>
                                    {{#each ingredients}}
                                        <li>{{this}}</li>
                                    {{/each}}
                                    <a id="{{@key}}" class="view-recipe" href="/viewRecipe">View the recepie</a>
                                </div>
        
                                <img class="foodImage"
                                    src="{{foodImageURL}}" width: 150; height: auto; />
                            </div>                
                        </div>
                    </div>
                    {{/with}}
                    {{/each}}
                    
                    <footer class="mastfoot mt-5 text-center text-light">
                        <div class="inner">
                            <p>Made with &hearts; by <a href="/">CookUni</a>.</p>
                        </div>
                    <i class="fa fa-heart"></i>
                    </footer>`;
                

                    var foodItem = Handlebars.compile(foodTemplate);
                    // for(let foodId in dataObject.response) {
                    //     console.log(foodId);
                    // }
                    console.log(dataObject.response)

                    
                    
                    return foodItem(dataObject);
                    
                
    
                    
                    
                    
                
    
            }

            

        });

    



    }
    
}