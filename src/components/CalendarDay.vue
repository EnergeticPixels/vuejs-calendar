<template>
    <div :class='classObject' @click='captureClick'>
        {{ day.format('D') }}
        <ul class='event-list'>
            <li v-for='event in events'>{{ event.description }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: [ 'day' ],
        computed: {
            classObject() {
                let today = this.day.isSame(this.$moment(), 'day');
                return {
                    day: true,
                    today,
                    past: this.day.isSameOrBefore(this.$moment(), 'day') && !today
                }
            },
            events() {
                return this.$store.state.events.filter(event => event.date.isSame(this.day, 'day'));
            }
        },
        methods: {
            captureClick() {
                this.$store.commit('eventFormPos', { x:event.clientX, y:event.clientY });
                this.$store.commit('eventFormActive', true);
            }
        }
    }
</script>

<style scoped>

</style>