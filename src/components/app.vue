<template>
    <div>
        <div v-for='day in days'>{{ day }}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                month: 5,
                year: 2017
            };
        },
        computed: {
            days() {
                
                // generatign all days in current month
                let days = [];
                let currentDay = this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-D');
                do {
                    days.push(currentDay);
                    currentDay = this.$moment(currentDay).add(1, 'days');
                } while ((currentDay.month()+1) === this.month);

                // add previous days to start
                currentDay = this.$moment(days[0]);
                const SUNDAY = 0;
                const MONDAY = 1;
                if (currentDay.day() !== MONDAY) {
                        do {
                        currentDay = this.$moment(currentDay).subtract(1, 'days');
                        // unshift pushes to the start of the array instead of the tail
                        days.unshift(currentDay);
                    } while(currentDay.day() !== MONDAY);
                }
                

                // add end days til end
                currentDay = this.$moment(days[days.length - 1]);
                if (currentDay.day() !== SUNDAY) {
                    do {
                        currentDay = this.$moment(currentDay).add(1, 'days');
                        // unshift pushes to the start of the array instead of the tail
                        days.push(currentDay);
                    } while(currentDay.day() !== SUNDAY);
                }
                
                return days;
            }
        }
    }
</script>

<style scoped>

</style>