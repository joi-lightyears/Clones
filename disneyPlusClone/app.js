let carousel = document.querySelector('.carousel')
// let sliders = []
let slideIndex =0;
const createSlide = () => {
    if(slideIndex >= movies.length){
        slideIndex=0;
    }
    let slide = document.createElement('div')
    let imgElement = document.createElement('img')
    let content = document.createElement('div')
    let h1 = document.createElement('h1')
    let p = document.createElement('p')

    imgElement.appendChild(document.createTextNode(''))
    h1.appendChild(document.createTextNode(movies[slideIndex].name))
    p.appendChild(document.createTextNode(movies[slideIndex].des))
    content.appendChild(h1)
    content.appendChild(p)
    slide.appendChild(content)
    slide.appendChild(imgElement)
    carousel.appendChild(slide)

    imgElement.src = movies[slideIndex].image
    
    slide.classList.add('slider-' + slideIndex, 'slider')
    slideIndex++
    content.className = 'slider-content'
    h1.className = 'movie-title'
    p.className = 'movie-desc'
    // sliders.push(slide)

    // sliding effect
    // if(sliders.length){
    //     sliders[0].style.marginLeft = `calc(-${100*(sliders.length-2)}% - ${30*(sliders.length-2)}px)`
    // }
}
for(let i=0;i<5;i++){
    createSlide()
}
var counter = 0

setInterval(() => {
    let firstSlide = document.querySelector('.slider-0')
    if(counter==4)
    {
        counter=0
        firstSlide.style.marginLeft = `calc(0px)`

    }else{
        firstSlide.style.marginLeft = `calc(-${100*(counter+1)}% - ${30*(counter+1)}px)`
        counter++
    }
}, 3000)

// video cards START
//----------create video cards 
let vidContainer = document.querySelector('.video-card-container')
let vidIndex = 0
const createVidCard = () => {
    let vidCard = document.createElement('div')
    let img = document.createElement('img')
    let vid = document.createElement('video')
    
    vidContainer.appendChild(vidCard)
    vidCard.appendChild(img)
    vidCard.appendChild(vid)
    img.src = videos[vidIndex].image
    vid.src = videos[vidIndex].video
    
    vidCard.className = ('video-card')
    img.className = 'video-card-img'
    vid.className = 'card-video'
    vidIndex++
}
for(let i = 0; i<5;i++)
{
    createVidCard()
}
//----------video will play when hover
const videoCards = document.querySelectorAll('.video-card')
videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1]
        video.play()
        video.loop = true
    })
    item.addEventListener('mouseleave', () => {
        let video = item.children[1]
        video.pause()
    })
})

// video cards END
