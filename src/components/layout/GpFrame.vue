<template>
    <div class="gp-frame-container">

        <div class="gp-frame-main">
            <slot></slot>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.gp-frame-container{
    width:100%;
    height:100%;
    padding:15px;
}
.gp-frame-main{
    width:100%;
    height:100%;
    border:1px solid red;
}

</style>