<template>
    <GpLayout
    
    hType="center"
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
                <div>slot 1-1</div>
                <div>welcome 1-1</div>
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
                    height:'100px;',
                    cols:[
                        {
                            show:true
                        }
                    ],
                },
                {
                    cols:[
                        {
                            width:'100px'
                        },
                        {
                            show:true
                        },
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
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: rgb(63, 63, 63);
}
</style>