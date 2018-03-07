<template>
    <v-area :data="data">
    </v-area>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            data: [
                { year: '1996', north: 322, south: 162 },
                { year: '1997', north: 324, south: 90 },
                { year: '1998', north: 329, south: 50 },
                { year: '1999', north: 342, south: 77 },
                { year: '2000', north: 348, south: 35 },
                { year: '2001', north: 334, south: 45 },
                { year: '2002', north: 325, south: 88 },
                { year: '2003', north: 316, south: 120 },
                { year: '2004', north: 318, south: 156 },
                { year: '2005', north: 330, south: 123 },
                { year: '2006', north: 355, south: 88 },
                { year: '2007', north: 366, south: 66 },
                { year: '2008', north: 337, south: 45 },
                { year: '2009', north: 352, south: 29 },
                { year: '2010', north: 377, south: 45 },
                { year: '2011', north: 383, south: 88 },
                { year: '2012', north: 344, south: 132 },
                { year: '2013', north: 366, south: 146 },
                { year: '2014', north: 389, south: 169 },
                { year: '2015', north: 334, south: 184 }
            ],
            label: {
                field: "year",
                option: {
                    formatter: (val, item) => {
                        return item.point['year'] + ":" + val;
                    }
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
        setTimeout(() => {
            this.content = {
                title: '容量',
                content: '300',
                extend: 'G'
            }
        }, 3000)
    },
}
</script>