const bgImgs = ['mexico', 'bangkok', 'spain', 'australia', 'manhattan', 'egypt'];
const bg = document.querySelector('#slide3 > img');
let count = 1;
setInterval(function() {
    for (let i =0; i<bgImgs.length; i++){
        bg.setAttribute('src', `/static/image/${bgImgs[count % 6]}.jpg`)};
        count = count + 1;
        console.log(count);
}, 3000);
