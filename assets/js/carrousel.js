let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');
let content = document.querySelectorAll('.content .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 10000)
function showSlider(){
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    let contentActiveOld = document.querySelector('.slider .content .item.active');

    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');
    contentActiveOld.classList.remove('active');

    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    content[itemActive].classList.add('active');

    document.querySelectorAll('.content .item').forEach(item => {
        item.style.display = 'none';
    });
    document.querySelector(`.content .content-item-${itemActive}`).style.display = 'block';

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 10000)
}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})