<template>
    <div class="gp-frame-container">

        <div class="gp-frame-main" :style="_gpBorderStyle">
            <slot></slot>
        </div>

    </div>
</template>

<script>
export default {
    name:'GpFrame',
    created(){
        
    },
}
</script>

<style scoped>

.gp-frame-container{
    position:relative;
    width:100%;
    height:100%;
    padding:15px;
}
.gp-frame-main{
    width:100%;
    height:100%;
    border:1px solid red;
    padding:15px;
    overflow:hidden;
}

</style>