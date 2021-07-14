<template>
    <GpLayout
    wType="center"    
    hType="scroll"
    :slotInfo="slotInfo"
    >
        <template v-slot:0-0>
            <GpFrame>
                <div>slot 0-0</div>
                <div>welcome 0-0</div>
            </GpFrame>
        </template>

        <template v-slot:0-1>
            <GpFrame>
                <div>slot 0-1</div>
                <div>welcome 0-1</div>
            </GpFrame>
        </template>
        
        <template v-slot:1-0>
            <GpFrame>
                <div>slot 1-0</div>
                <div>welcome 1-0</div>
            </GpFrame>
        </template>

        <template v-slot:1-1>
            <GpFrame>
                <GpLayout wType="center" fixedWidth="300px">
                    <template v-slot:0-0>
                        <div>child layout slot 0-0</div>
                    </template>
                </GpLayout>
            </GpFrame>
        </template>

    </GpLayout>
</template>

<script>

export default {
    name: 'App',
    data(){
        return {
            slotInfo:[
                {
                    show:true,
                    //height:'100px;',
                    cols:[
                        {show:true}
                    ],
                },
                {
                    cols:[
                        {
                            //width:'100px'
                        },
                        {show:true},
                    ],
                },
            ]
        }
    }
}
</script>

<style>
*{
    box-sizing: border-box;
    margin:0px;
}
#app {
    padding:15px;
    width:100vw;
    height:100vh;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: rgb(63, 63, 63);
}
</style>