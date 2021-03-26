function PersonComponent({ srcSuffix, name, selected}) {
    
    return (
        `<div class="vote__item ${selected ? 'vote__item--selected' : ''}">
            <div class="vote__item__awards">${selected ? '👍' : ''}</div>
            <div class="vote__item__pic">
                <picture>
                    <source srcset="./images/4x/${srcSuffix}" media="(orientation: landscape) and (min-width: 1921px), (orientation: portrait) and (min-width: 1200px)"/>
                    <source srcset="./images/3x/${srcSuffix}" media="(orientation: landscape) and (min-width: 1280px), (orientation: portrait) and (min-width: 880px)"/>
                    <source srcset="./images/2x/${srcSuffix}" media="(orientation: landscape) and (min-width: 880px), (orientation: portrait) and (min-width: 570px)"/>
                    <img class="vote__item__photo" src="./images/1x/${srcSuffix}">
                </picture>
            </div>
            <div class="vote__item__name">${name}</div>
        </div>`
    )
}

function ArrowComponent({direction, selected}) {
   
    const directionModifier = direction == 'up' ? '--up' : '--down'

    return (
        `<svg 
            width="64" 
            height="64" 
            class="vote__arrow vote__arrow${directionModifier} ${selected === true ? 'vote__arrow--selected' : ''}" 
            viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    d="M32 2C15.4315 2 2 15.4315 2 32C2 48.5685 15.4315 62 32 62C48.5685 62 62 48.5685 62 32C62 15.4315 48.5685 2 32 2ZM32 -2.79753e-06C14.3269 -4.34256e-06 4.34256e-06 14.3269 2.79753e-06 32C1.2525e-06 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 -1.2525e-06 32 -2.79753e-06ZM4.99999 32C4.99999 17.0883 17.0883 4.99999 32 4.99999C46.9117 4.99999 59 17.0883 59 32C59 46.9117 46.9117 59 32 59C17.0883 59 4.99999 46.9117 4.99999 32ZM38.9393 36.0607C39.5251 36.6464 40.4749 36.6464 41.0607 36.0607C41.6464 35.4749 41.6464 34.5251 41.0607 33.9393L33.0607 25.9393C32.4749 25.3536 31.5251 25.3536 30.9393 25.9393L22.9393 33.9393C22.3536 34.5251 22.3536 35.4749 22.9393 36.0607C23.5251 36.6464 24.4749 36.6464 25.0607 36.0607L32 29.1213L38.9393 36.0607Z" 
                />
        </svg>`
    )
}

export default function VoteComponent(emoji, selectedUserId, data) {

    const renderPersonComponent = (user) => {
        return PersonComponent({
            srcSuffix: user.avatar,
            name: user.name,
            selected: user.id === selectedUserId
        })
    }
    
    return (
        `<div class="slide__content vote vote--portrait">
            <div class="slide__row slide__row--left">
                ${renderPersonComponent(data[0])}
                ${renderPersonComponent(data[3])}
                ${renderPersonComponent(data[6])}
            </div>
            <div class="slide__row slide__row--middle">
                ${ArrowComponent({direction: 'up', selected: false})}
                ${renderPersonComponent(data[1])}
                ${renderPersonComponent(data[4])}
                ${ArrowComponent({direction: 'down', selected: true})}
            </div>
            <div class="slide__row slide__row--right">
                ${renderPersonComponent(data[2])}
                ${renderPersonComponent(data[5])}
                ${renderPersonComponent(data[7])}
            </div>
        </div>

        <div class="slide__content vote vote--landscape">
            <div class="slide__column slide__column--1">
                ${renderPersonComponent(data[0])}
            </div>
            <div class="slide__column slide__column--2">
                ${renderPersonComponent(data[1])}
                ${renderPersonComponent(data[4])}
            </div>
            <div class="slide__column slide__column--3">
                ${ArrowComponent({direction: 'up', selected: false})}
                ${ArrowComponent({direction: 'down', selected: true})}
            </div>
            <div class="slide__column slide__column--4">
                ${renderPersonComponent(data[2])}
                ${renderPersonComponent(data[5])}
            </div>
            <div class="slide__column slide__column--5">
                ${renderPersonComponent(data[3])}
            </div>
        </div>`

    )
}
