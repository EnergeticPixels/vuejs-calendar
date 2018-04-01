<template>
    <div class='day'>{{ day.format('D') }}</div>
</template>

<script>
    export default {
        props: [ 'day' ]
    }
</script>

<style scoped>

</style>