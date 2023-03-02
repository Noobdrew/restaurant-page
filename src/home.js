export default function createHome() {

    const homeElement = document.createElement('div')
    homeElement.classList.add('home-page')

    const title = document.createElement('div')
    title.classList.add('title')
    title.innerText = 'Mercelerri'
    homeElement.appendChild(title)

    const subTitle = document.createElement('div')
    subTitle.classList.add('sub-title')
    subTitle.innerText = 'Le Croissant'
    title.appendChild(subTitle)

    const titleDisc = document.createElement('div')
    titleDisc.classList.add('title-description')
    titleDisc.innerText = 'Come and have one of the best croissants in France, made by the world renowned Gilles Marchal.'
    homeElement.appendChild(titleDisc)

    const smallDisc = document.createElement('small')
    smallDisc.innerText = " Venez déguster l'un des meilleurs croissants de France, réalisé par le célèbre Gilles Marchal."
    titleDisc.appendChild(smallDisc)

    const content = document.querySelector('.content')
    content.appendChild(homeElement)

    const homePage = content.appendChild(homeElement)
  
    return homePage
}
