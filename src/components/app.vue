<template>
    <div>
        {{ msg }}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'Hello World'
            };
        },
        created() {
            console.log(this.$moment);
        }
    }
</script>

<style scoped>

</style>