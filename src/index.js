//only for event listeners and calling modules 

import createHome from './home'

const homeButton = document.querySelector('.home')
const menuButton = document.querySelector('.menu')
const contactButton = document.querySelector('.contact')
const content = document.querySelector('.content')

createHome()


homeButton.addEventListener('click', addActive)
menuButton.addEventListener('click', addActive)
contactButton.addEventListener('click', addActive)



function addActive(e) {

    if (e.target.classList.contains('active')) {
        return 
    } else {
        homeButton.classList.remove('active')
        menuButton.classList.remove('active')
        contactButton.classList.remove('active')
        e.target.classList.add('active')
        console.log(e.target)

        if (homeButton.classList.contains('active')) {
            content.innerHTML=''
            console.log('create home')
            createHome()
        }
        if (menuButton.classList.contains('active')) {
            content.innerHTML=''
            console.log('create menu')
        }
        if (contactButton.classList.contains('active')) {
            content.innerHTML=''
            console.log('create contacts')
        }
    }
}
