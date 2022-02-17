var images = document.querySelectorAll('.image img')
var prev = document.querySelector('.left')
var next = document.querySelector('.right')
var close = document.querySelector('.close')
var galleryImg =document.querySelector('.gallery__inner img')
var gallery =document.querySelector('.gallery')


var currentIndex = 0;

function galleryShow(){
    if(currentIndex == 0){
        prev.classList.add('hide')
    }
    else{
        prev.classList.remove('hide')
    }

    if(currentIndex == images.length - 1){
        next.classList.add('hide')
    }
    else{
        next.classList.remove('hide')
    }


    // hien thi
    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show')
}

images.forEach((item, index) => {
    item.addEventListener('click', function(){
        currentIndex = index;
        galleryShow();
    })
})


close.addEventListener('click',function(){
    gallery.classList.remove('show')
})

prev.addEventListener('click', function(){
    if(currentIndex > 0){
        currentIndex--;
        galleryShow()
    }


})

next.addEventListener('click', function(){
    if(currentIndex < images.length - 1){
        currentIndex++;
        galleryShow()
    }
})