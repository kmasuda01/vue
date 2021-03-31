<template>
    <div>
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: "contain",
            text: "Have a good day!"
        }
    }
}
</script>

<style scoped>
div{
   margin: 30px;
}
h2{
    color: red
}
p{
    color: red
}
</style>