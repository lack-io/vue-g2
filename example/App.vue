<template>
    <div>
        <v-line :data="data" :height="300" :forceFit="false">
        </v-line>
        <v-liqu :data="data1" :label="label"></v-liqu>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            data: [
                { month: 'Jan', Tokyo: 7.0, London: 3.9 },
                { month: 'Feb', Tokyo: 6.9, London: 4.2 },
                { month: 'Mar', Tokyo: 9.5, London: 5.7 },
                { month: 'Apr', Tokyo: 14.5, London: 8.5 },
                { month: 'May', Tokyo: 18.4, London: 11.9 },
                { month: 'Jun', Tokyo: 21.5, London: 15.2 },
                { month: 'Jul', Tokyo: 25.2, London: 17.0 },
                { month: 'Aug', Tokyo: 26.5, London: 16.6 },
                { month: 'Sep', Tokyo: 23.3, London: 14.2 },
                { month: 'Oct', Tokyo: 18.3, London: 10.3 },
                { month: 'Nov', Tokyo: 13.9, London: 6.6 },
                { month: 'Dec', Tokyo: 9.6, London: 4.8 }
            ],
            data1: [0.5],
            label: {
                formatter: (params) => {
                    return Math.ceil(params.data * 100) + '%'
                }
            },
            content: {
                title: '容量',
                content: '200',
                extend: 'G'
            }
        }
    },
    mounted() {
        setInterval(() => {
            this.data1 = [Math.random()]
        }, 3000)
    },
}
</script>