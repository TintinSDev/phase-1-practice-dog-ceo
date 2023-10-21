console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"



const breedUrl = 'https://dog.ceo/api/breeds/list/all'

const breedDropdown = document.querySelector('#breed-dropdown')


document.addEventListener('DOMContentLoaded', () => {
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
        const img = document.createElement('img')
        img.src = data.message[0]
        document.body.appendChild(img)
    })

    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const ul = document.createElement('ul')
            for (let breed in data.message) {
                const li = document.createElement('li')
                li.innerText = breed
                li.addEventListener('click', onclick => {
                    li.style.color = 'red'
                    // fetch(breed).then(res => res.json()).then(data => {
                    //     const img = document.createElement('img')
                    //     img.src = data.message[0]
                    //     document.body.appendChild(img)

                    // })
                })
                ul.appendChild(li)
            }
            document.body.appendChild(ul)
        })
    
})