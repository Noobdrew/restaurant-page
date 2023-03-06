//an array of objects 
//the menu items will be created with a constructor

export default function createMenu() {

    const contnt = document.querySelector('.content')
    const menuList = document.createElement('div')
    menuList.classList.add('menu-list')

    class menuItems {
        constructor(frenchTitle, engTitle, itemPrice, menuDisc) {

            this.frenchTitle = frenchTitle
            this.engTitle = engTitle
            this.itemPrice = itemPrice
            this.menuDisc = menuDisc
        }
    }

    const menuArr = []
    let counter = 0
    function storeItems() {
        menuArr[0] = new menuItems('Croissant au beurre', '(Butter Croissant)', '1.50$', 'Croassant baked with homemade butter')
        menuArr[1] = new menuItems('Croissant au Jambon et Fromage', '(Croissant with Ham and Cheese)', '3.50$', 'Croasssant baked with ham from free range turkeys and croissant cheese')
        menuArr[2] = new menuItems('Pain au chocolat', '(Chocolate Croassant)', '2.50$', 'Croassant baked with Caribian chocolate')
        menuArr[3] = new menuItems('Croissant aux Fraises ', '(Strawberry Croissant)', '2.50$', 'Croassant baked with local wild strawberries ')
        menuArr[4] = new menuItems("Croissant à la Pâte d'Amande", '(Croissant with Almond Paste)', '3.50$', 'Croassant baked with the best almands in France')
        menuArr[5] = new menuItems("Croissant avec Glace", '(Croissant with Ice Cream)', '2.00$', 'Croassant filled with home made vanilla ice cream')
        menuArr[6] = new menuItems("Croissant au bacon", '(Croissant with Bacon)', '2.50$', 'Croassant baked with free range bacon')
        menuArr[7] = new menuItems("Croissant à la Mozzarella et au Basilic", '(Croissant with Mozzarella and Basil)', '3.00$', 'Croassant baked with organic mozzarella and wild basil')
        menuArr[8] = new menuItems("Croissant à l'ail et au fromage", '(Croissant with Garlic and Cheese)', '2.50$', "Croassant baked with Pont l'Évêque cheese and wild garlic")
    }

    storeItems()
    function createItems() {
        const element = document.createElement('div')
        element.classList.add('menu-item')
        element.innerHTML = `
    <div class="menu-title">
    <div class="french-title">${menuArr[counter].frenchTitle}</div>
    <div class="item-price">${menuArr[counter].itemPrice}</div>
    </div>
    <div class="eng-title">${menuArr[counter].engTitle}</div>
    <div class="menu-description">${menuArr[counter].menuDisc}</div>
    `
        menuList.appendChild(element)
        counter++
    }

    for (let i = 0; i < menuArr.length; i++) {
        createItems()
    }

    return contnt.appendChild(menuList)
}

console.log(createMenu())