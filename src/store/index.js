import Vue from 'vue';
import Vuex from 'vuex';

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentYear: 2018,
        currentMonth: 4,
        eventFormPosX: 0,
        eventFormPosY: 0,
        eventFormActive: false,
        events: [
            { description: 'Random Event 1', date: moment('2018-04-06', 'YYYY-MM-DD') },
            { description: 'Random Event 2', date: moment('2018-04-08', 'YYYY-MM-DD') },
            { description: 'Random Event 3', date: moment('2018-05-10', 'YYYY-MM-DD') }
        ]
    },
    mutations: {
        setCurrentMonth(state, payload) {
            state.currentMonth = payload;
        },
        setCurrentYear(state, payload) {
            state.currentYear = payload;
        },
        eventFormPos(state, payload) {
            state.eventFormPosX = payload.x;
            state.eventFormPosY = payload.y;
        },
        eventFormActive(state, payload) {
            state.eventFormActive = payload;
        },
        addEvent(state, payload) {
            state.events.push({
                description: payload,
                date: moment()
            });
        }
    }
});