export const preloadImage = src =>
    new Promise((resolve, reject) => {
        const image = new Image()
        image.onload = resolve
        image.onerror = reject
        image.src = src
    })
// Preload an image
// await preloadImage('https://picsum.photos/100/100')