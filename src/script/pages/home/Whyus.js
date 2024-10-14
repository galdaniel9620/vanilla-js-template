import whyusimg from "../../../assets/img/whyus.jpeg"

const Whyus = function () {
    const whyus ={
        title: "The reason why you need to choose us",
        smallDescription: "Lorem ipsum dolor sit amet consectetur. Aliquet dictum netus lacus interdum dignissim ante. Tempus scelerisque ut orci ultrices nec non."
    }

    const liText = [
        "Fast & Easy Booking",
        "Many Pickup Location",
        "24/7 Customer Service"
    ]

    const li = liText.map(el => `<li>${el}</li>`).join('')

    return `
    <section class="whyus-section inner">
        <div class="whyus-section_left">
            <h2>${whyus.title}</h2>
            <ul>${li}</ul>
            <p>${whyus.smallDescription}</p>
        </div>
        <img class="whyus-section_right" src= ${whyusimg}\>        
    </section>`
}

export default Whyus