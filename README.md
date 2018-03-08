# vue-g2

> 蚂蚁金服g2图表的vue简单封装

## 安装

``` bash
npm install -S https://github.com/xingyys/vue-g2.git
```

## 简单使用
> vue-g2 共封装了蚂蚁金服g2图表的折线图、柱状图、饼图、点图、面积图、雷达图、词云还有百度echarts的水球图。

```javascript
import VueG2 from 'vue-g2'
Vue.use(VueG2)
```

### 折线图
```javascript
<template>
    <div>
        <v-line :data="data" :height="300" :forceFit="false" :position="['month', 'Tokyo', 'London']">
        </v-line>
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
        }
    },
}
</script>
```

### 柱状图
```JavaScript
<template>
    <div>
        <v-bar :data="data" :position="['name', 'Jan.', 'Feb.', 'Mar.']">
        </v-bar>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            data: [
                { name: 'London', 'Jan.': 18.9, 'Feb.': 28.8, 'Mar.': 39.3, 'Apr.': 81.4, 'May': 47, 'Jun.': 20.3, 'Jul.': 24, 'Aug.': 35.6 },
                { name: 'Berlin', 'Jan.': 12.4, 'Feb.': 23.2, 'Mar.': 34.5, 'Apr.': 99.7, 'May': 52.6, 'Jun.': 35.5, 'Jul.': 37.4, 'Aug.': 42.4 }
            ],
        }
    },
}
</script>
```

### 饼图

```javascript
<template>
    <div>
        <v-pie :data="data" :height="300" :forceFit="false" :position="['item', 'count']">
        </v-pie>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            data: [
                { item: '事例一', count: 40 },
                { item: '事例二', count: 21 },
                { item: '事例三', count: 17 },
                { item: '事例四', count: 13 },
                { item: '事例五', count: 9 }
            ]
        }
    },
}
</script>
```

### 面积图
```javascript
<template>
    <div>
        <v-area :data="data" :position="['year', 'value']">
        </v-area>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            data: [
                { year: '1991', value: 15468 },
                { year: '1992', value: 16100 },
                { year: '1993', value: 15900 },
                { year: '1994', value: 17409 },
                { year: '1995', value: 17000 },
                { year: '1996', value: 31056 },
                { year: '1997', value: 31982 },
                { year: '1998', value: 32040 },
                { year: '1999', value: 33233 }
            ]
        }
    },
}
</script>
```

### 雷达图
```javascript
<template>
    <div>
        <v-radar :data="data" :position="['item', 'a', 'b']">
        </v-radar>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            data: [
                { item: 'Design', a: 70, b: 30 },
                { item: 'Development', a: 60, b: 70 },
                { item: 'Marketing', a: 50, b: 60 },
                { item: 'Users', a: 40, b: 50 },
                { item: 'Test', a: 60, b: 70 },
                { item: 'Language', a: 70, b: 50 },
                { item: 'Technology', a: 50, b: 40 },
                { item: 'Support', a: 30, b: 40 },
                { item: 'Sales', a: 60, b: 40 },
                { item: 'UX', a: 50, b: 60 }

            ]
        }
    },
}
</script>
```

### 点图
```javascript
<template>
    <div>
        <v-point :data="data" :position=['gender', 'height', 'weight']>
        </v-point>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            data: [
                { "gender": "male", "height": 161.2, "weight": 51.6 },
                { "gender": "female", "height": 167.5, "weight": 59 },
                { "gender": "male", "height": 159.5, "weight": 49.2 },
                { "gender": "female", "height": 157, "weight": 63 },
                { "gender": "male", "height": 155.8, "weight": 53.6 },
                { "gender": "female", "height": 170, "weight": 59 },
                { "gender": "female", "height": 159.1, "weight": 47.6 },
                { "gender": "female", "height": 166, "weight": 69.8 },
                { "gender": "female", "height": 176.2, "weight": 66.8 },
                { "gender": "female", "height": 160.2, "weight": 75.2 },
            ]
        }
    },
}
</script>
```

### 词云
```JavaScript
<template>
    <div>
        <v-cloud :data="data" :position="['gender', 'height', 'weigth']">
        </v-cloud>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            data: [
                { "gender": "male", "height": 161.2, "weight": 51.6 },
                { "gender": "female", "height": 167.5, "weight": 59 },
                { "gender": "male", "height": 159.5, "weight": 49.2 },
                { "gender": "female", "height": 157, "weight": 63 },
                { "gender": "male", "height": 155.8, "weight": 53.6 },
                { "gender": "female", "height": 160.2, "weight": 75.2 },
            ]
        }
    },
}
</script>
```

### 水球图
```JavaScript
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
```


