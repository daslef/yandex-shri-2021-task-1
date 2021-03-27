export default function PersonComponent({ srcSuffix, name, selected}) {
    
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