function filterCategory(filterSelection, filterBy){
    let recipeCards = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
    // console.log(recipeCards);
    // this is to show FILTERED items from an array which is contained 
    // in a "RecipeCardWrapper"

    for(let listItem of recipeCards){
        // will run every item in the list within the brackets
        if(listItem.dataset[filterBy] === filterSelection){
            listItem.style.display = "flex";
        // will SHOW an item to a "flex" display style when assigned to a filter which
        // is selected
        } else {
            listItem.style.display = "none";
        // will NOT SHOW an item that in NOT included in the filter
        }
    }
}

function allCategories(){
    let recipeCards = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
    // console.log(recipeCards);
    // this is to show ALL items in all categories from an array which is contained 
    // in a "RecipeCardWrapper"

    for(let listItem of recipeCards){
        listItem.style.display = "flex";
        // will SHOW an item to a "flex" display style
    }
}

