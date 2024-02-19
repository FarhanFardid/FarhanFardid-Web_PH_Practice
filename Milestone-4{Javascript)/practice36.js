// show the Books by filtering years from books array of objects

let books =  [
    { 
        title:'To Kill a Mockingbird', 
        author:'Harper Lee', 
        year:1960
    },
                                    
    { 
        title:'Harry Potter and the Philosopher Stone', 
        author:'J.K. Rowling',
        year:1997
    },
                                                        
    { 
        title:'The Hunger Games', 
        author:'Suzanne Collins', 
        year:2008
    }
] ;

const findBooks = (arrOfBooks) =>{
    let book =[]; 
    for(let i=0;i< arrOfBooks.length;i++){
        if(arrOfBooks[i].year > 2000){
            book.push(arrOfBooks[i]);
            
        }
    }
    return book;

}

let result = findBooks(books);
console.log(result);