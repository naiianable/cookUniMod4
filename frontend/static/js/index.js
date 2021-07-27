import Home from "./views/Home.js";
import UserHome from "./views/UserHome.js";
import Recipes from "./views/Recipes.js";
import Register from "./views/Register.js";
import Login from "./views/Login.js";
import ViewRecipe from "./views/ViewRecipe.js";
import EditRecipe from "./views/Edit.js";
import Logout from "./views/Logout.js";



const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));

}

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};


const router = async () => {
    //console.log(pathToRegex("/posts/:id"))
    const routes = [
        { path: "/", view: Home },
        { path: "/userHome", view: UserHome },
        { path: "/recipes", view: Recipes },
        { path: "/register", view: Register },
        { path: "/login", view: Login },
        { path: "/viewRecipe", view: ViewRecipe },
        { path: "/edit", view: EditRecipe },
        { path: "/logout", view: Logout}
    ];

    //Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });
    
    

    //assigning the matching route from potentialMatches array to "match" variable
    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if(!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    

    //rendering everything inside div with id="rooter"
    document.querySelector("#rooter").innerHTML = await view.getHtml();

    // //USE THIS TO ACCESS ROUTES AND ADD DOM FUNCTIONALITY
    // if(match.route.path == "/userHome") {
    //     document.addEventListener('DOMContentLoaded', event => {
    //         let showRecipe = document.getElementsByClassName('view-recipe');
    //         showRecipe.addEventListener('click', event => {
    //             event.target
    //             console.log('thisisclick', event);
    //         });        
                    
    //         console.log('content loaded')
    //     });
    // }

    if(match.route.path == '/register') {
        //REGISTER PAGE
    //pull dom elements=>all inputs areas and sign up button
    //add requirements to all input areas
    //add eventlistener to sign up button
    //set up post 
    //display div notifications when successful
   

    
        let firstName = document.getElementById('defaultRegisterFormFirstName');
        let lastName = document.getElementById('defaultRegisterFormLastName');
        let userName = document.getElementById('defaultRegisterFormUsername');
        let userPassword = document.getElementById('defaultRegisterFormPassword');
        let repeatPassword = document.getElementById('defaultRegisterRepeatPassword');
        var errorMsg = document.getElementById('errorBox');
        var successMsg = document.getElementById('successBox');
        let signUpButton = document.getElementById('register-button');
        
        console.log(errorMsg)
    
        signUpButton.addEventListener('click', event => {
            console.log('sign up button CLICK')
            if(firstName.value.length < 2) {
                errorMsg.innerHTML = 'First name is too short';
                errorMsg.style.display='block';
                setTimeout(function() {
                    $(errorMsg).fadeOut('slow');
                }, 1000);
      
            }
            if(lastName.value.length < 2) {
                errorMsg.innerHTML = 'Last name is too short';
                errorMsg.style.display='block';
                setTimeout(function() {
                    $(errorMsg).fadeOut('slow');
                }, 1000);
    
            }
            if(userName.value.length < 3) {
                errorMsg.innerHTML = 'Username is too short';
                errorMsg.style.display='block';
                setTimeout(function() {
                    $(errorMsg).fadeOut('slow');
                }, 1000);
    
            }
            if(userPassword.value.length < 6) {
                errorMsg.innerHTML = 'Password is too short';
                errorMsg.style.display='block';
                setTimeout(function() {
                    $(errorMsg).fadeOut('slow');
                }, 1000);
     
            }
            if(userPassword.value !== repeatPassword.value) {
                errorMsg.innerHTML = 'Passwords do not match';
                errorMsg.style.display='block';
                setTimeout(function() {
                    $(errorMsg).fadeOut('slow');
                }, 1000);
       
            }
    
            if(firstName.value.length > 1 && lastName.value.length > 1 && userName.value.length > 2 && userPassword.value.length > 5 && userPassword.value == repeatPassword.value) {
    
                var newUser = JSON.stringify({
                    'first name': firstName.value,
                    'last name': lastName.value,
                    'password': userPassword.value,
                    'username': userName.value
                });
    
                var requestOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: newUser
                };
    
                fetch('https://userdatacookuni-default-rtdb.firebaseio.com/.json', requestOptions)
                .then(response => response.json())
                .then(data => {
                    successMsg.innerHTML = 'User registration successful'
                    successMsg.style.display = 'block';
                    setTimeout(function() {
                        $(successMsg).fadeOut('slow');
                    }, 1000);
                    console.log('post was successful', data)
                })
                .catch(err => console.log('error', err));
                console.log('this is for the register', event);
            
            }
            });
        

    }

    if(match.route.path == '/userHome') {
        document.addEventListener('click', viewRecipe);

        async function viewRecipe(temp) {
            //setting event listener click to id of target/thing clicked
            let targetRecipe = temp.target.id;
            window.localStorage.setItem('recipeKey', targetRecipe);
            
            // await fetch(`https://cookinguni-e696f-default-rtdb.firebaseio.com/${targetRecipe}.json`)
            // .then(response => response.json())
            // .then(data => {
            //     console.log('success', data);
            // });   

            console.log(targetRecipe);
        }
    }

    if(match.route.path == '/viewRecipe') {
        //ARCHIVE POSTS...NNED TO FIGURE OUT HOW TO DISPLAY RECIPE TO GET CORRECT URL
            let recipeId = window.localStorage.getItem('recipeKey');
            console.log(recipeId)
            let archiveBtn = document.getElementsByClassName('btn btn-danger')[0];
            archiveBtn.addEventListener('click', archiveFunction);

            async function archiveFunction() {
                let requestOptions = {
                    method: 'DELETE',
                };

                await fetch(`https://cookinguni-e696f-default-rtdb.firebaseio.com/${recipeId}/.json`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    
                    var successMsg = document.getElementById('successBox');

                        successMsg.innerHTML = 'Archive Successful';
                        successMsg.style.display='block';
                        setTimeout(function() {
                            $(successMsg).fadeOut('slow');
                        }, 1000);

                    console.log('success, data was archived', data)})
                .catch(err => {
                    var errorMsg = document.getElementById('errorBox');
                        errorMsg.innerHTML = 'Archive Failed';
                        errorMsg.style.display='block';
                        setTimeout(function() {
                            $(errorMsg).fadeOut('slow');
                        }, 1000);
                    });
                // console.log('this is the click');
                // console.log(archiveBtn)
            }

        //add functionality to the 'likes' button//NOT WORKING....
        let likesBtn = document.getElementsByClassName('btn btn-success')[0];

        likesBtn.addEventListener('click', likeEvent);
        
        async function likeEvent() {

            await fetch(`https://cookinguni-e696f-default-rtdb.firebaseio.com/${recipeId}/.json`)
           .then(response => response.json())
           .then(data => {

                let totalLikes = data.likesCounter;
                totalLikes++;

                console.log(totalLikes)
                let temp = {
                'likesCounter': totalLikes
                };

                var myRequests = {
                    method: 'PATCH',
                    body: temp
                }

                fetch(`https://cookinguni-e696f-default-rtdb.firebaseio.com/${recipeId}/.json`, myRequests)
                    .then(response => response.json())
                    .then(data => {

                        console.log('success', data);
                    }) 


           });

            
         
           
        }


    

    }

    if(match.route.path == '/recipes') {
        //SHARE RECIPE SCREEN.
        let shareBtn = document.getElementById('share-button');
        let newMeal = document.getElementById('defaultRecepieShareMeal');
        let newIngredients = document.getElementById('defaultRecepieShareIngredients');
        let newPrep = document.getElementById('defaultRecepieShareMethodOfPreparation');
        let newDesc = document.getElementById('defaultRecepieShareDescription');
        let newPic = document.getElementById('defaultRecepieShareFoodImageURL');
        let newCategory = document.querySelector('select');
        //console.log('this is the event', event);
        //console.log(newCategory.value);

        shareBtn.addEventListener('click', event => {

            let displayImage;

        if(newCategory.value === 'Lean meats and poultry, fish and alternatives') {
            displayImage = 'https://t3.ftcdn.net/jpg/01/18/84/52/240_F_118845283_n9uWnb81tg8cG7Rf9y3McWT1DT1ZKTDx.jpg';
        } else if(newCategory.value === 'Vegetables and legumes/beans') {
            displayImage = 'https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__340.jpg';
        } else if(newCategory.value === 'Grain Food') {
            displayImage = 'https://cdn.pixabay.com/photo/2014/12/11/02/55/corn-syrup-563796__340.jpg';
        } else if(newCategory.value === 'Fruits') {
            displayImage = 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
        } else if(newCategory.value === 'Milk, cheese, eggs and alternatives') {
            displayImage = 'https://image.shutterstock.com/image-photo/assorted-dairy-products-milk-yogurt-260nw-530162824.jpg';
        }

            var newRecipeItem = JSON.stringify({
                'category': newCategory.value,
                'categoryImageURL': displayImage,
                'description': newDesc.value,
                'foodImageURL': newPic.value,
                'ingredients': newIngredients.value.split(', '),
                'likesCounter': 0,
                'meal': newMeal.value,
                'prepMethod': newPrep.value
            });

        console.log(newRecipeItem)

            fetch("https://cookinguni-e696f-default-rtdb.firebaseio.com/.json", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: newRecipeItem 
            })
            .then(response => response.json())
            .then(data => {
                var successMsg = document.getElementById('successBox');
                    successMsg.innerHTML = 'Share Success!';
                    successMsg.style.display='block';
                    setTimeout(function() {
                        $(successMsg).fadeOut('slow');
                    }, 1000);
                
                console.log('data posted successfully', data);
            })
            .catch(err => {
                var errorMsg = document.getElementById('errorBox');
                    errorMsg.innerHTML = 'Share Failed';
                    errorMsg.style.display='block';
                    setTimeout(function() {
                        $(errorMsg).fadeOut('slow');
                    }, 1000);
                console.error('error', err)
            });
            }); 
    }

    if(match.route.path == '/edit') {
        //SHARE RECIPE SCREEN.
        let editBtn = document.getElementById('edit-button');
        let editMeal = document.getElementById('defaultRecepieEditMeal');
        let editIngredients = document.getElementById('defaultRecepieEditIngredients');
        let editPrep = document.getElementById('defaultRecepieEditMethodOfPreparation');
        let editDesc = document.getElementById('defaultRecepieEditDescription');
        let editPic = document.getElementById('defaultRecepieEditFoodImageURL');
        let editCategory = document.querySelector('select');
        //console.log('this is the event', event);
        //console.log(newCategory.value);

        editBtn.addEventListener('click', event => {

            let displayImage;
            //setting defaul category images based on choice in drop down
        if(editCategory.value === 'Lean meats and poultry, fish and alternatives') {
            displayImage = 'https://t3.ftcdn.net/jpg/01/18/84/52/240_F_118845283_n9uWnb81tg8cG7Rf9y3McWT1DT1ZKTDx.jpg';
        } else if(editCategory.value === 'Vegetables and legumes/beans') {
            displayImage = 'https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__340.jpg';
        } else if(editCategory.value === 'Grain Food') {
            displayImage = 'https://cdn.pixabay.com/photo/2014/12/11/02/55/corn-syrup-563796__340.jpg';
        } else if(editCategory.value === 'Fruits') {
            displayImage = 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
        } else if(editCategory.value === 'Milk, cheese, eggs and alternatives') {
            displayImage = 'https://image.shutterstock.com/image-photo/assorted-dairy-products-milk-yogurt-260nw-530162824.jpg';
        }
            //creation of the object that will be passed into the PATCH
            var editRecipeItem = JSON.stringify({
                'category': editCategory.value,
                'categoryImageURL': displayImage,
                'description': editDesc.value,
                'foodImageURL': editPic.value,
                'ingredients': editIngredients.value.split(', '),
                'likesCounter': 0,
                'meal': editMeal.value,
                'prepMethod': editPrep.value
            });

        console.log(editRecipeItem)

        //grabbing id from local storage from initial click from user homepage
        let recipeId = window.localStorage.getItem('recipeKey');
        console.log(recipeId)

            fetch(`https://cookinguni-e696f-default-rtdb.firebaseio.com/${recipeId}/.json`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: editRecipeItem 
            })
            .then(response => response.json())
            .then(data => {
                var successMsg = document.getElementById('successBox');
                    successMsg.innerHTML = 'Edit Success!';
                    successMsg.style.display='block';
                    setTimeout(function() {
                        $(successMsg).fadeOut('slow');
                    }, 1000);
                
                console.log('data posted successfully', data);
            })
            .catch(err => {
                var errorMsg = document.getElementById('errorBox');
                    errorMsg.innerHTML = 'Edit Failed';
                    errorMsg.style.display='block';
                    setTimeout(function() {
                        $(errorMsg).fadeOut('slow');
                    }, 1000);
                console.error('error', err)
            });
            }); 
    }

    if(match.route.path == '/logout') {
        var errorMsg = document.getElementById('errorBox');
        var successMsg = document.getElementById('successBox');



        if(localStorage) {
            localStorage.removeItem('recipeKey');
                successMsg.innerHTML = 'Logout successful, return to homepage'
                successMsg.style.display = 'block';
                setTimeout(function() {
                    $(successMsg).fadeOut('slow');
                }, 1000);
        } else {
            errorMsg.innerHTML = 'Logout unsuccessful';
            errorMsg.style.display='block';
            setTimeout(function() {
                $(errorMsg).fadeOut('slow');
            }, 1000);
        }
        console.log('this is the logout screen')
    }
    
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", ()=> {
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});










    

