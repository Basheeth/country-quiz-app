


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
            let fakeCountries = data[Math.floor(Math.random()*data.length)];
            option1.push(fakeCountries.name.common);
            option2.push(fakeCountries.capital[0]);
            console.log("hi", option1);
            console.log("hi", option2);
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


//creating option

// function rendorHtml(ques,options){
//       question.innerText = ques;
   
//       option1.innerText = ;      

//       option2.innerText = ;

//       option3.innerText = ;

//       option4.innerText = ;
      
// }
