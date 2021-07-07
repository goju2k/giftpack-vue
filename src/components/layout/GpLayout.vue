<template>

    <div class="gp-layout-container" :style="containerStyle">

        <div class="gp-layout-main"  :style="mainStyle">

            <template v-for="(row, i) in slotList" :key="i">

                <div class="gp-layout-row"
                :style="(row.grow?'flex-grow:'+row.grow+';':'')
                +(row.height?'height:'+row.height+';':'')
                "
                v-show="row.show !== false"
                >

                    <template v-for="(col, k) in row.cols" :key="i+'-'+k">

                        <div class="gp-layout-col" 
                        :style="(col.grow?'flex-grow:'+col.grow+';':'')
                        +(col.width?'width:'+col.width+';':'')
                        "
                        v-show="col.show !== false"
                        >
                            <slot :name="i+'-'+k"></slot>
                        </div>

                    </template>

                </div>

            </template>

        </div>

    </div>

</template>

<script>
export default {
    name:'GpLayout',
    props:{

        //width / height style
        wType:{
            type:String,
            default:'fit-screen',
            validator:(val)=>{
                return ['fit-screen','center','scroll'].indexOf(val) !== -1;
            }
        },
        fixedWidth:{type:String, default:'800px'},
        hType:{
            type:String,
            default:'scroll',
            validator:(val)=>{
                return ['fit-screen','center','scroll'].indexOf(val) !== -1;
            }
        },
        fixedHeight:{type:String, default:'600px'},

        //frame config
        slotInfo:{
            type:Array,
            default:()=>{return [
                {
                    cols:[{

                    }],
                },
            ]},
            validator:(val)=>{
                if(!val || val.length === 0){
                    return false;
                }
                for(let row of val){
                    if(!row.cols || row.cols.length === 0){
                        return false;
                    }
                }
                return true;
            }
        }

    },
    created(){
        
    },
    computed:{
        slotList(){
            console.log('slotList reloaded...');
            return JSON.parse(JSON.stringify(this.slotInfo));
        },
        containerStyle(){
            
            let style = '';

            if(this.wType === 'center' || this.hType === 'center'){
                style += 'display:flex;'
            }

            //wType
            if(this.wType === 'center'){
                style += 'justify-content:center;';
            }
            //hType
            if(this.hType === 'center'){
                style += 'align-items:center;';
            }

            return style;

        },
        mainStyle(){

            let style = '';

            //width
            style += 'width:';
            if(this.wType === 'center'){
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
            if(this.hType === 'center'){
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
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
.gp-layout-row{
    width:100%;
    height: 100%;
    display:flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-grow: 1;
}
.gp-layout-col{
    width:100%;
    height:100%;
    flex-grow: 1;
}
</style>