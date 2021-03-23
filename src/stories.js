import './scss/app.scss';

import './scss/leaders.scss';
import './scss/vote.scss';
import './scss/chart.scss';
import './scss/diagram.scss';
import './scss/activity.scss';

import './scss/_media.scss';
import './scss/_variables.scss';
import './scss/_fonts.scss';

import LeadersComponent from './components/leaders'
import VoteComponent from './components/vote'
import ChartComponent from './components/chart'
import DiagramComponent from './components/diagram'
import ActivityComponent from './components/activity'


window.renderTemplate = function(alias, data) {
    
    let content;
    
    if (alias == 'leaders') {
        content = LeadersComponent(data.emoji, data.users, data.selectedUserId)
    } else if (alias == 'vote') {
        content = VoteComponent(data.emoji, data.selectedUserId, data.users)
    } else if (alias == 'chart') {
        content = ChartComponent(data.values, data.users)
    } else if (alias == 'diagram') {
        content = DiagramComponent(data.totalText, data.differenceText, data.categories)
    } else if (alias == 'activity') {
        content = ActivityComponent(data)
    }

    return (
        `<div class="slide">
            <div class="slide__heading">${data.title}</div>
            <div class="slide__subhead">${data.subtitle}</div>
            ${content}
        </div>`
    )
}