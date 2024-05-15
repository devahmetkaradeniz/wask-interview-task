<script setup lang="ts">

defineOptions({
    inheritAttrs: false
})

interface IProps {
    data: number[]
}

const props = withDefaults(defineProps<IProps>(), {

})

const series = computed(() => {
    return [
        {
            name: "metric",
            data: props.data
        }
    ]
})

const options = {
    chart: {
        type: 'area',
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        }
    },
    legend: {
        show: false
    },
    fill: {
        colors: ['#C70024']
    },
    stroke: {
        width: 3,
        colors: ['#4E028A']
    },
    tooltip: { enabled: false },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        opposite: false,
        labels: {
            show: false
        }
    },
    yaxis: {
        show: false,
        opposite: false
    }
}
</script>

<template>
    <client-only>
        <apexchart type="area" height="390" :options="options" :series="series"></apexchart>
    </client-only>
</template>