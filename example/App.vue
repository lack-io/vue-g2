<template>
    <div>
        <v-liqu :data="data">
        </v-liqu>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            data: [0.3]
        }
    },
}
</script>