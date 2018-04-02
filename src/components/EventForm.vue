<template>
    <div id='event-form' :class='{ active: true }' :style="{ top: top, left: left }"></div>
</template>

<script>
    export default {
        computed: {
            top() {
                return `${this.$store.state.eventFormPosY}px`
            },
            left() {
                return `${this.$store.state.eventFormPosX}px`
            }
        }
    }
</script>

<style scoped>

</style>