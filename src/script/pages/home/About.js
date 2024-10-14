import about1 from "../../../assets/img/about1.jpeg"
import about2 from "../../../assets/img/about2.jpeg"
import about3 from "../../../assets/img/about3.jpeg"


const About = function () {
    const about = {
        title: "We have a quality service to provide your need",
        smallDescription: "Lorem ipsum dolor sit amet consectetur. Aliquet dictum netus lacus interdum dignissim ante. Tempus scelerisque ut orci ultrices nec non. Euismod proin est nulla sed nec. In eu id tellus integer."
    }

    const cards = [
        {
            title: "Airport Transfers",
            description: "Lorem ipsum dolor sit amet consectetur. Aliquet dictum netus lacus interdum dignissim ante. Tempus scelerisque ut orci ultrices nec non. Euismod proin est nulla sed nec.",
            img : about1
        },
        {
            title: "Special Events",
            description: "Lorem ipsum dolor sit amet consectetur. Aliquet dictum netus lacus interdum dignissim ante. Tempus scelerisque ut orci ultrices nec non. Euismod proin est nulla sed nec.",
            img : about2
        },
        {
            title: "Intercity Rides",
            description: "Lorem ipsum dolor sit amet consectetur. Aliquet dictum netus lacus interdum dignissim ante. Tempus scelerisque ut orci ultrices nec non. Euismod proin est nulla sed nec.",
            img : about3
        },
    ]

    const card = cards.map(el => `
            <div class="card">
                <img src="${el.img}" />
                <h3>${el.title}</h3>
                <p>${el.description}</p>
            </div>
        `).join('')


    return `<section id="about" class="about-section inner">
        <h2>${about.title}</h2>
        <p class="small-descripton">${about.smallDescription}</p>
        <div class="card-cointainer">
            ${card}
        </div>
    </section>`
}

export default About
