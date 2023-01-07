


// function  to create the quiz
createQuiz();



function createQuiz(){

    fetch("https://restcountries.com/v3.1/all")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let i = data[Math.floor(Math.random()*data.length)];
        questionType = Math.floor(Math.random()*3);
        buildQuestion(i.name.common)
        console.log(i.name.common);
        console.log(i.capital[0]);
        console.log(i.flag);
    })
}