<template>
    <div>
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
    <GmapMap
        :center="{lat:10, lng:10}"
        :zoom="7"
        map-type-id="terrain"
        style="width: 500px; height: 300px"
        >
    <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: "Body",
            text: "Have a good day!"
        }
    }
}
</script>

<style scoped>
div{
    padding: 100px;
}
h2{
    color: red
}
p{
    color: red
}
</style>