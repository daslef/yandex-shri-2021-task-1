function HeatmapRowComponent(rowData, index) {

    const magicNumber = 16.7;

    return (
        `<div class="heatmap__row" style="bottom: ${magicNumber * (23 - index)}px;">
            ${rowData.join('')}
        </div>`
    )
}


function HeatmapImageComponent(activity) {
    const size = (activity == 0) ? 'min' : (activity <= 2) ? 'mid' : (activity <= 4) ? 'max' : 'extra';
    return (
        `<div class="heatmap__element">
            <img class="heatmap__image" src="./images/${size}-${theme}.svg" />
        </div>`
    )
}

function generateHourData(data) {

    const hourData = []
    const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]

    for (const day of days) {

        const dayData = []
        
        data[day].map((activity, index) => {
            if (index % 2 == 1) {
                dayData[dayData.length-1] += activity
            } else {
                dayData.push(activity)
            }
        })

        const dayImages = dayData.map(value => HeatmapImageComponent(value))

        const heatmapGap = '<div class="heatmap__gap"></div>'
        
        if (days.indexOf(day) % 2 == 0) {
            dayImages.push(heatmapGap)
        } else {
            dayImages.unshift(heatmapGap)
        }
        
        hourData.push(dayImages)
    }

    return hourData
}


function generateDayData(data) {
    
    const dayData = []

    for (let i=0; i < 24; i++) {
        
        const hourData = [data.mon[i], data.tue[i], data.wed[i], data.thu[i], data.fri[i], data.sat[i], data.sun[i]]
        
        const hourImages = hourData.map(value => HeatmapImageComponent(value))

        const heatmapGap = '<div class="heatmap__gap"></div>'
        
        if (i % 2 == 0) {
            hourImages.push(heatmapGap)
        } else {
            hourImages.unshift(heatmapGap)
        }
        
        dayData.push(hourImages)
    }

    return dayData

}


function HeatmapComponent(data, orientation) {

    let heatMapData = [];

    if (orientation.startsWith('landscape')) {
        heatMapData = generateHourData(data);
    } else {
        heatMapData = generateDayData(data);
    }
        
    return (
        `<div class="activity__heatmap activity__heatmap--${orientation}">
            ${heatMapData.map((el, ix) => HeatmapRowComponent(el, ix)).join('')}
        </div>`
    )
}


function LegendComponent(theme, orientation) {

    const sliderUnitSrc = `./images/slider-unit-${theme}.svg`

    return (
        `<div class="activity__legend activity__legend--${orientation}">
            <div class="activity__legend__item">
                <div class="activity__legend__pic">
                    <img src=${sliderUnitSrc} />
                </div>
                <div class="activity__legend__text">${orientation.startsWith('landscape') ? '2 часа' : '1 час'}</div>
            </div>
            <div class="activity__legend__item">
                <div class="activity__legend__pic activity__legend__pic--min"></div>
                <div class="activity__legend__text">0</div>
            </div>
            <div class="activity__legend__item">
                <div class="activity__legend__pic activity__legend__pic--mid"></div>
                <div class="activity__legend__text">1 — 2</div>
            </div>
            <div class="activity__legend__item">
                <div class="activity__legend__pic activity__legend__pic--max"></div>
                <div class="activity__legend__text">3 — 4</div>
            </div>
            <div class="activity__legend__item">
                <div class="activity__legend__pic activity__legend__pic--extra"></div>
                <div class="activity__legend__text">5 — 6</div>
            </div>
        </div>`
    )

}

export default function ActivityComponent(data) {

    const theme = document.body.className.substr(6) // why not 5??
    // const orientation = window.screen.orientation.type;

    // document.addEventListener('orientationchange', () => {
    //     location.reload()
    // }) 

    return (
        `<div class="slide__content activity">
            ${HeatmapComponent(data.data, 'landscape')}
            ${HeatmapComponent(data.data, 'portrait')}
            ${LegendComponent(theme, 'landscape')}
            ${LegendComponent(theme, 'portrait')}
        </div>`
    )
}
