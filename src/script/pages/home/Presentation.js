const Presentation = function () {
    const presentation = {
        title: "Drive a car with more efficient way",
        smallDescription: "Lorem ipsum dolor sit amet consectetur. Aliquet dictum netus lacus interdum dignissim ante. Tempus scelerisque ut orci ultrices nec non. Euismod proin est nulla sed nec. In eu id tellus integer. Pulvinar blandit id consequat tellus mauris.Consequat aliquet tellus est pellentesque"
    }

    return `
    <section class="presentation-section inner">
        <div class="presentation-section_header">
            <p>${presentation.smallDescription}</p>
            <h2>${presentation.title}</h2>
        </div>
        <div class="presentation-section_footer">
        
        </div>
    </section>`
}

export default Presentation