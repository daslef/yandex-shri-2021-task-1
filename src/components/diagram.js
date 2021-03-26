function DonutComponent(total, diff, categories) {

    const SETTINGS = {
        gradients: ["paint0_radial", "paint1_radial", "paint2_radial", "paint3_radial"],
        cx: 80,
        cy: 80,		      
        radius: 67,
        strokeWidth: 25,
    }

    const values = categories
        .map(category => category.valueText)
        .map(category => {
            const spaceIndex = category.indexOf(' ')
            return parseInt(category.substring(0, spaceIndex))
        })

    const chartData = []

    const l =  2 * Math.PI * SETTINGS.radius
    const valuesSum = values.reduce((acc, val) => acc + val)

    let angleOffset = -90 - values[0] / valuesSum / 2 * 360

    values.map((value, index) => {
        chartData.push(angleOffset)
        angleOffset += value / valuesSum * 360
    })

    function offset(value) {
        return l * (1 - value / valuesSum)
    }
    
    function transform(index) { 
        return `rotate(${chartData[index]}, ${SETTINGS.cx}, ${SETTINGS.cy})` 
    }

    // stroke="${SETTINGS.colors[index]}"


    const donutChunkElement = (index, value) => {
        return `<g>
            <circle
                fill="transparent" 
                cx="${SETTINGS.cx}"
                cy="${SETTINGS.cy}"
                r="${SETTINGS.radius}"
                stroke="url(#${SETTINGS.gradients[index]})"
                stroke-width="${SETTINGS.strokeWidth}"
                stroke-dasharray="${l-2}"
                stroke-dashoffset="${offset(value)}"
                transform="${transform(index)}"
            />
        </g>`
    }

    return (
        `<div class="diagram__donut">
            <svg viewBox="0 0 160 160" class="diagram__donut__svg">
                <defs>
                    <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(146.486 176.514) rotate(90) scale(163.486)">
                        <stop offset="0.71875" stop-color="#FFA300"/>
                        <stop offset="1" stop-color="#5B3A00"/>
                    </radialGradient>
                    <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-21.5141 84.5141) rotate(90) scale(163.486)">
                        <stop offset="0.729167" stop-color="#633F00"/>
                        <stop offset="1" stop-color="#0F0900"/>
                    </radialGradient>
                    <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(127.486 -69.4859) rotate(90) scale(163.486)">
                        <stop offset="0.71875" stop-color="#9B9B9B"/>
                        <stop offset="1" stop-color="#382900"/>
                    </radialGradient>
                    <radialGradient id="paint3_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(175.486 97.5141) rotate(90) scale(163.486)">
                        <stop offset="0.71875" stop-color="#4D4D4D"/>
                        <stop offset="1" stop-color="#382900"/>
                    </radialGradient>
                </defs>
                ${values.map((value, ix) => donutChunkElement(ix, value)).join('')}
            </svg>
            <div class="diagram__donut__text">
                <div class="diagram__donut__total">${total}</div>
                <div class="diagram__donut__diff">${diff}</div>
            </div>
        </div>`
    )
}

function LegendItem({ title, value, difference }) {
    
    return (
        `<div class="legend__item">
            <div class="legend__item__indicator"></div>
            <div class="legend__item__title">${title}</div>
            <div class="legend__item__values">
                <div class="legend__item__diff">${difference.slice(0, difference.indexOf(' '))}</div>
                <div class="legend__item__total">${value.slice(0, difference.indexOf(' '))}</div>
            </div>
        </div>`
    )
}

function LegendComponent(categories) {

    const separator = `<div class="diagram__legend__separator"></div>`

    const output = categories
        .map(category => LegendItem({
            title: category.title,
            value: category.valueText,
            difference: category.differenceText
        }))
        .join(separator)

    return `<div class="diagram__legend">${output}</div>`

}

export default function DiagramComponent(total, diff, categories) {
    return (
        `<div class="slide__content diagram">
            ${DonutComponent(total, diff, categories)}
            ${LegendComponent(categories)}
        </div>`
    )
}
