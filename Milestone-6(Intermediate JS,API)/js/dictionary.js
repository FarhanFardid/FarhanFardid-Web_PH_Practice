const loadData = (word) =>{
    const url =`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    try{
        fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
    }
    catch{
        console.log("Invalid request");
    }
}

const displayData =(meaning) =>{
    const diContainer = document.getElementById('diction_container');
    diContainer.innerHTML ='';
    const wordDiv= document.createElement('div');
    wordDiv.innerHTML =`
    <h4 class="fw-bold p-2"> Word : ${meaning[0].word}</h4>
    <p class="p-1"> POS: ${meaning[0].meanings[0].partOfSpeech}</p>
    <p class="fw-normal p-1"> Meaning : ${meaning[0].meanings[0].definitions[2].definition}</p>
    <p class="fw-normal p-1"> Synonyms : ${meaning[0].meanings[0].synonyms[1]} ,${meaning[0].meanings[0].synonyms[2]}</p>
    <p class="fw-normal p-1"> Antonyms : ${meaning[0].meanings[0].antonyms[0]} ,${meaning[0].meanings[0].antonyms[1]}</p>
    <p> Phonetics: </p>
    <audio src="${meaning[0].phonetics[0].audio}" controls></audio>
    `
    diContainer.appendChild(wordDiv);
    console.log(meaning);
}

// loadData('good');

document.getElementById('search_btn').addEventListener('click', function(){
    console.log("btn clicked");
    const wordText =document.getElementById('word_field').value;
    loadData(wordText);
    console.log(wordText);
})


// document.getElementById('search_btn').addEventListener('click', function(){
//     const srcWord = document.getElementById('word_field').value; 
    
//     loadData(srcWord);


// })