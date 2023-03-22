// const photos =[
//     'photos/computer-1.jpg',
//     'photos/computer-2.jpg',
//     'photos/computer-3.jpg'
// ];
// let imgIndex = 0;
// const imgURL = document.getElementById('image');
// setInterval(() =>{
//      if(imgIndex == photos.length){
//         imgIndex=0;
//      }
//     const imgUrl = photos[imgIndex];
//     imgURL.setAttribute('src',imgUrl);
    
//     imgIndex++;
// },2000)
const image = [
    'photos/computer-1.jpg',
     'photos/computer-2.jpg',
     'photos/computer-3.jpg'
];
let imgIndex =0;
const imgURL =document.getElementById('image');
setInterval(()=> {
    if(imgIndex === image.length){
        imgIndex =0;
    }
    const imgUrl = image[imgIndex];
    imgURL.setAttribute('src', imgUrl);

    imgIndex++;

},2000);