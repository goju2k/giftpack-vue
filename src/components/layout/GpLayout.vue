<template>

    <div class="gp-layout-container" :style="containerStyle">

        <div class="gp-layout-main"  :style="mainStyle">
        </div>

    </div>

</template>

<script>
export default {
    name:'GpLayout',
    props:{
        wType:{
            type:String,
            default:'fit-screen',
            validator:(val)=>{
                return ['fit-screen','centered','scroll'].indexOf(val) !== -1;
            }
        },
        fixedWidth:{type:String, default:'800px'},
        hType:{
            type:String,
            default:'scroll',
            validator:(val)=>{
                return ['fit-screen','centered','scroll'].indexOf(val) !== -1;
            }
        },
        fixedHeight:{type:String, default:'600px'},
    },
    created(){
        
    },
    computed:{
        containerStyle(){
            
            let style = '';

            if(this.wType === 'centered' || this.hType === 'centered'){
                style += 'display:flex;'
            }

            //wType
            if(this.wType === 'centered'){
                style += 'justify-content:center;';
            }
            //hType
            if(this.hType === 'centered'){
                style += 'align-items:center;';
            }

            return style;

        },
        mainStyle(){

            let style = '';

            //width
            style += 'width:';
            if(this.wType === 'centered'){
                style += this.fixedWidth+';';
            }else{
                style += '100%;';
            }

            //scroll
            if(this.wType === 'scroll'){
                style += 'overflow-x:auto;';
            }else{
                style += 'overflow-x:hidden;';
            }

            if(this.hType === 'scroll'){
                style += 'overflow-y:auto;';
            }else{
                style += 'overflow-y:hidden;';
            }
            
            //height
            style += 'height:';
            if(this.hType === 'centered'){
                style += this.fixedHeight+';';
            }else{
                style += '100%;';
            }

            return style;

        },
    },
    data(){
        return {

        }
    },
    methods:{
        
    }
}
</script>

<style scoped>

.gp-layout-container{
    border:1px solid grey;
    position:relative;
    width:100vw;
    height:100vh;
}
.gp-layout-main{
    border:1px solid lightgreen;
    width:100%;
    height:100%;
}

</style>