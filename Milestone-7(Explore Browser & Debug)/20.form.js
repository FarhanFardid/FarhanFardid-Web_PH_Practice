function addToLocalStorage(attr, val){

       localStorage.setItem(attr, val);


}

function removeFromLocalStorage(attr){

    localStorage.removeItem(attr);
}

document.getElementById('rmv-btn').addEventListener('click',function(){

    localStorage.clear();
});




document.getElementById('sn-btn').addEventListener('click', function(){
    let nameField = document.getElementById('name').value; 
    addToLocalStorage('Name', nameField);
    console.log(nameField);
});

document.getElementById('se-btn').addEventListener('click', function(){
    let emailField = document.getElementById('email').value; 
    addToLocalStorage('Email', emailField);
});

document.getElementById('sm-btn').addEventListener('click', function(){
    let msgField = document.getElementById('msg').value; 
    addToLocalStorage('Message', msgField);
});

document.getElementById('rn-btn').addEventListener('click', function(){
   
    removeFromLocalStorage('Name');
});
document.getElementById('re-btn').addEventListener('click', function(){
   
    removeFromLocalStorage('Email');
});
document.getElementById('rm-btn').addEventListener('click', function(){
   
    removeFromLocalStorage('Message');
});
function getLocalData(){
    let storage = localStorage.getItem('information');
    let information={};
    if(storage){
        information = JSON.parse(storage);
    }
    return information;
}

function setToLocalData (attr, val){
    const information = getLocalData();
    information[attr]=val;
    const infoStr = JSON.stringify(information);
    localStorage.setItem('information', infoStr) ;

}
document.getElementById('send-btn').addEventListener('click', function(){
    let nameField = document.getElementById('name').value; 
    let emailField = document.getElementById('email').value; 
    let msgField = document.getElementById('msg').value; 
     setToLocalData('Name',nameField);
setToLocalData('Email', emailField);
setToLocalData("Message",msgField);

});

