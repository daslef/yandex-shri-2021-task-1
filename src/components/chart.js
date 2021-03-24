function ChartItem({value, title, isCurrent, maxValue}) {

    let minHeight = value / maxValue * (70 - 3.3)

    minHeight = (minHeight < 1) ? '8px' : `${minHeight}%`

    return (
        `<div class="chart__item ${isCurrent ? 'chart__item--active' : ''}">
            <div class="chart__item__value">${value > 0 ? value : ''}</div>
            <div class="chart__item__bar" style="min-height:${minHeight}"></div>
            <div class="chart__item__title">${title}</div>
        </div>`
    )
}

function ChartList(values) {

    let activeIndex;
    
    for (const [ix, el] of values.entries()) {
        if (el.hasOwnProperty('active') && el.active === true) {
            activeIndex = ix
            break
        }
    }
    
    const leftLimit = Math.max(activeIndex - 6, 0)
    const rightLimit = Math.min(activeIndex + 2, values.length)

    const relevantValues = values.slice(leftLimit, rightLimit + 1)
    const maxValue = Math.max(...relevantValues.map(el => el.value))

    const output = relevantValues
        .map((el, ix) => ChartItem({
            value: el.value,
            title: el.title,
            isCurrent: el.hasOwnProperty('active'),
            maxValue: maxValue
        }))
        .join('')
    
    return `<div class="chart__list">${output}</div>`
    
}

function LeadersItem({ srcSuffix, name, value }) {
    
    return (
        `<div class="chart__person">
            <div class="chart__person__pic">
                <picture>
                    <source srcset="./images/4x/${srcSuffix}" media="(orientation: landscape) and (min-width: 1921px), (orientation: portrait) and (min-width: 1200px)"/>
                    <source srcset="./images/3x/${srcSuffix}" media="(orientation: landscape) and (min-width: 1280px), (orientation: portrait) and (min-width: 880px)"/>
                    <source srcset="./images/2x/${srcSuffix}" media="(orientation: landscape) and (min-width: 880px), (orientation: portrait) and (min-width: 570px)"/>
                    <img class="chart__person__photo" src="./images/1x/${srcSuffix}">
                </picture>
            </div>
            <div class="chart__person__meta">
                <div class="chart__person__name">${name}</div>
                <div class="chart__person__value">${value}</div>
            </div>
        </div>`
    )
}

function LeadersList(users) {

    const separator = `<div class="chart__leaders__separator"></div>`

    const leaders = users
        .slice(0,2)
        .map(user => LeadersItem({
            srcSuffix: user.avatar,
            name: user.name,
            value: user.valueText
        }))
        .join(separator)

    return `<div class="chart__leaders">${leaders}</div>`

}

export default function ChartComponent(values, users) {

    const leaders = LeadersList(users)
    const chart = ChartList(values)
    
    return (
        `<div class="slide__content chart">
            ${chart}
            ${leaders}
        </div>`
    )
}
