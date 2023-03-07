export default function createContact() {
    const content = document.querySelector('.content')

    const contactPage = document.createElement('div')
    contactPage.classList.add('contact-page')

    const contactMap = document.createElement('div')
    contactMap.classList.add('map')
    contactMap.innerHTML = `
    <iframe width="600px" height="600px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=rue%20du%20four%201%20paris%20france+(Mercelerri)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
    <a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a>
    </iframe>`

    const contactText = document.createElement('div')
    contactText.classList.add('contact-text')

    const contactTitle = document.createElement('div')
    contactTitle.classList.add('contact-title')
    contactTitle.textContent = `Come and have the best Croassant in Paris. 
                                Our bakery is only a short walk from
                                Saint-Germain and Odeon metro station.`

    const contactInfo = document.createElement('div')
    contactInfo.classList.add('contact-info')
    contactInfo.textContent = `For reservations and orders you can reach out to us here:`

    const contactAddress = document.createElement('div')
    contactAddress.classList.add('contact-info')
    contactAddress.textContent = `Address: Rue du Four 1, Paris France`

    const contactEmail = document.createElement('div')
    contactEmail.classList.add('contact-info')
    contactEmail.textContent = `E-mail: mercelerri@baker.com`

    const contactPhone = document.createElement('div')
    contactPhone.classList.add('contact-info')
    contactPhone.textContent = `Phone number: 059609536`

    contactText.appendChild(contactTitle)
    contactText.appendChild(contactInfo)
    contactText.appendChild(contactAddress)
    contactText.appendChild(contactEmail)
    contactText.appendChild(contactPhone)

    contactPage.appendChild(contactMap)
    contactPage.appendChild(contactText)

    return content.appendChild(contactPage)

}
