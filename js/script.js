const pics = ['carlos-sims-cheetahs.jpg', 'carlos-sims-beard.jpg', 'carlos-sims-birds.jpg', 'carlos-sims-deer.jpg', 'carlos-sims-gold.jpg', 'carlos-sims-golf.jpg']

// const picsGallery = ['carlos-sims-cheetahs.jpg', 'carlos-sims-beard.jpg', 'carlos-sims-birds.jpg', 'carlos-sims-deer.jpg', 'carlos-sims-gold.jpg', 'carlos-sims-golf.jpg']



for(j = 0; j < 3; j++) {
    for(let i = 0; i < pics.length; i++) {
        const wrapper = document.querySelector(".pic-wrapper")
        const gallery = `<img src="../img/${pics[i]}" alt="" class="pic-wrapper__grid" />`
        wrapper.innerHTML += gallery
    }
}

for(j = 0; j < 3; j++) {
    for(let i = 0; i < pics.length; i++) {
        const wrapper = document.querySelector(".pic-wrapper__gallery")
        const gallery = `<img src="../img/${pics[i]}" alt="" class="pic-wrapper__grid" />`
        wrapper.innerHTML += gallery
    }
}


// for(i = 0; i<3; i++) {
    // picsGallery.forEach(picGallery => {
    //     const wrapperGallery = document.querySelector(".pic-wrapper__gallery")
    //     const galleryWrapper = `<img src="../img/${picGallery}" alt="" class="pic-wrapper__grid" />`
    //     wrapperGallery.innerHTML += galleryWrapper
    // })
// }



// imagePathsFromApi.forEach(value, index)
// {
//     let imgTag = `<img src="${value}" alt="..." />`;
//     body.innerHTML += imgTag;
// }