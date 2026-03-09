
// menu toggle

let navMenu = document.getElementById('nav-menu')
let menuBtn = document.getElementById('menu-btn')

function toggleMenu() {
    navMenu.classList.toggle('activeMenu')
    menuBtn.classList.toggle('activeBtn')
}


//News grid

const blogGrid = document.getElementById('blogGrid')

let news = [
    {imageJpg: 'media/img/News-1.jpg', imageWebp: 'media/img/News-1.webp', title: 'The Ultimate Guide to Digital Transformation for Small...', description:'Embracing digital transformation is essential for small businesses seeking growth and resilience...'},

    {imageJpg: 'media/img/News-2.jpg', imageWebp: 'media/img/News-2.webp', title: 'Why Cloud Solutions Are the Backbone of Modern Enterprises', description: 'Cloud technologies offer flexibility, security, and scalability for all types of organizations. Learn how cloud solutions...' },

    {imageJpg: 'media/img/News-3.jpg', imageWebp: 'media/img/News-3.webp', title: 'Automate to Innovate: How Workflow Automation Boosts...', description: '' },

    {imageJpg: 'media/img/News-4.jpg', imageWebp: 'media/img/News-4.webp', title: 'Data-Driven Decisions: Leveraging Analytics in Your Company', description: 'Transform your business with data-driven insights that guide smarter decision-making. See how adopting analytics...' },

    {imageJpg: 'media/img/News-5.jpg', imageWebp: 'media/img/News-5.webp', title: 'Cybersecurity Essentials Every Business Should Know', description: 'Protecting your digital assets is critical in a connected world. Uncover the most important cybersecurity practices...' },

    {imageJpg: 'media/img/News-6.jpg', imageWebp: 'media/img/News-6.webp', title: 'Remote Work Revolution: Tools and Tips for Seamless...', description: 'Remote work is here to stay, and with the right tools, your team can thrive from anywhere.' },

    {imageJpg: 'media/img/News-7.jpg', imageWebp: 'media/img/News-7.webp', title: 'From Paper to Pixel: Digitizing Your Business Processes', description: 'Transitioning from manual to digital processes reduces errors and accelerates workflows.' },

    {imageJpg: 'media/img/News-8.jpg', imageWebp: 'media/img/News-8.webp', title: 'Customer Experience in the Digital Age: Best Practices to Stand Out', description: 'Digital tools allow you to personalize and enhance customer interactions. Learn how to deliver outstanding...' },

    {imageJpg: 'media/img/News-9.jpg', imageWebp: 'media/img/News-9.webp', title: 'Overcoming the Challenges of Digital Adoption in Traditional...', description: 'Adopting new technologies can be daunting for established industries. Explore practical solutions for managing resistance...' }
]


news.forEach(single => {
    let singleNew = document.createElement('div');
    singleNew.classList.add('blog__card');

    singleNew.innerHTML = `
        <picture>
            <source srcset="${single.imageWebp}" type="image/webp">
            <img src="${single.imageJpg}" alt="${single.title}">
        </picture>
        <h4>${single.title}</h4>
        <p>${single.description}</p>
        <a href="single-post.html" class="link">Read more</a>
    `

    blogGrid.appendChild(singleNew)
})