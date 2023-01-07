


// function  to create the quiz
createQuiz();



function createQuiz(){

    let option1 = [];
    let option2 = [];
    fetch("https://restcountries.com/v3.1/all")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let country = data[Math.floor(Math.random()*data.length)];
        for (let i = 0 ; i < 3 ; i++){
            let fakeCountries = data[Math.floor(Math.random()*3)];
            
        }
        buildQuestion(country.name.common,country.capital[0],country.flag);
    })
}

function buildQuestion(name,capital,flag){
    questionType = Math.floor(Math.random()*3);

    if (questionType == 1){
        rendorHtml(`What is the capital of${b}`)
    }
    else if (questionType == 2){
        rendorHtml(`${capital} is the capital of `)
    }
    else{
        rendorHtml(`${flag} which country does this flag belongs to?`)
    }

}


function rendorHtml(){
      
}