


// function  to create the quiz
createQuiz();



function createQuiz(){

    fetch("https://restcountries.com/v3.1/all")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let i =data[Math.floor(Math.random()*data.length)];
        console.log(i);
        console.log(i.name);
        console.log(i.capital);
        console.log(i.flag);
    })
}