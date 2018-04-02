<template>
    <div>
        <div>{{ formattedDate }}</div>
        <button @click='dec'>-</button>
        <button @click='inc'>+</button>
    </div>
</template>

<script>
    export default {
        methods: {
            inc() {
                if (this.month ===12) {
                    this.$store.commit('setCurrentMonth', 1);
                    this.$store.commit('setCurrentYear', this.year + 1);
                } else {
                    this.$store.commit('setCurrentMonth', this.month + 1)
                };
                this.$store.commit('eventFormActive', false)
            },
            dec() {
                if (this.month === 1) {
                    this.$store.commit('setCurrentMonth', 12);
                    this.$store.commit('setCurrentYear', this.year - 1);
                } else {
                    this.$store.commit('setCurrentMonth', this.month - 1)
                };
                this.$store.commit('eventFormActive', false)
                
            } 
        },
        computed: {
            month() {
                return this.$store.state.currentMonth;
            },
            year() {
                return this.$store.state.currentYear;
            },
            formattedDate() {
                return this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-D').format('MMMM YYYY');
            }
        }
    }
</script>

<style scoped>

</style>