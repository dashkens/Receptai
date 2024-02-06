
let chickenRecipe = document.querySelector('#chicken-recipe');
let cakeRecipe = document.querySelector('#cake-recipe');
let pastaRecipe = document.querySelector('#pasta-recipe');

let chickenRecipeChosen = document.querySelector('#chicken-chosen');
let cakeRecipeChosen = document.querySelector('#cake-chosen');
let pastaRecipeChosen = document.querySelector('#pasta-chosen');

let results = document.querySelector('#results')

let slider = document.querySelector('#slider-wrapper');

let sliderValue = document.querySelector('#sliderValue')



function clickedRecipe() {
    if (chickenRecipeChosen.style.display === 'block') {
        return 'chicken';
    } else if (cakeRecipeChosen.style.display === 'block') {
        return 'cake';
    } else if (pastaRecipeChosen.style.display === 'block') {
        return 'pasta';
    }
    return null;
}


cakeRecipe.addEventListener('click', function () {
    chickenRecipeChosen.style.display = 'none';
    cakeRecipeChosen.style.display = 'block';
    pastaRecipeChosen.style.display = 'none';
    updateResults('cake')
});

pastaRecipe.addEventListener('click', function () {
    chickenRecipeChosen.style.display = 'none';
    cakeRecipeChosen.style.display = 'none';
    pastaRecipeChosen.style.display = 'block';
    updateResults('pasta')
});

chickenRecipe.addEventListener('click', function () {
    chickenRecipeChosen.style.display = 'block';
    cakeRecipeChosen.style.display = 'none';
    pastaRecipeChosen.style.display = 'none';
    updateResults('chicken')

});

function updateResults(recipe) {

    if (recipe === 'chicken') {
        results.innerHTML = 
        `<p>
        Vištiena: <strong>${100*portionNum} g.</strong></p>
        <p>Pomidorai: <strong>${100*portionNum} g.</strong> </p>
        <p>Česnakas: <strong>${0.5*portionNum} skiltelių.</strong></p>
        <p>Prieskoniai: <strong>Pagal skonį.</strong></p>
        `
    } else if (recipe === 'cake') {
        results.innerHTML =
        `<p>Miltų: <strong>${250*portionNum} g.</strong></p>
        <p>Kiaušinių: <strong>${1*portionNum} vnt.</strong></p>
        <p>Mėlynių: <strong>${50*portionNum} g.</strong></p>
        <p>Cukraus: <strong>${1*portionNum} šaukštelį(-ių).</strong></p>
        `
    } else if(recipe === 'pasta') {
        results.innerHTML =
        `<p>Mėsa: <strong>${100*portionNum} g.</strong></p>
        <p>Pasta: <strong>${80*portionNum} g.</strong></p>
        <p>Marinara padažas: <strong>${50*portionNum} g.</strong></p>
        <p>Cukraus: <strong>Pagal skonį.</strong></p>
        `
    }
}

slider.addEventListener('input', function(){
    const marker = 43 + (this.value - 1) *32
    document.getElementById('sliderValue').style.left = marker + "px"
    document.getElementById('sliderValue').innerText = this.value
    portionNum = this.valueAsNumber;
    sliderValue.innerText = portionNum; 
    updateResults(clickedRecipe());
});



