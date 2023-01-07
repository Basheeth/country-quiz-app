


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
        renderHtml(`What is the capital of${b}`,option1)
    }
    else if (questionType == 2){
        renderHtml(`${capital} is the capital of `,option2)
    }
    else{
        renderHtml(`${flag} which country does this flag belongs to?`,option2)
    }

}


function renderHtml(ques,options){
      question.innerText = ques;

      
   
      option1.innerText = options[0];      

      option2.innerText = options[1];

      option3.innerText = options[2];

      option4.innerText = options[3];
      
}
