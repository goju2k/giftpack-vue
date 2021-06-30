const GpVue = function () {

    this.install = function (app, option) {

        option = option || {useList:[]};

        //Component Global Registration
        const ctx = require.context('./', true, /\.vue$/);

        ctx.keys().forEach(key => {
            const regInfo = key.match(/\/(\w+)\.vue/);
            const comName = regInfo?regInfo[1]:null;
            if (comName && (option.useList.length == 0 || option.useList.includes(comName))
            ) {
                app.component(comName, ctx(key).default);
                console.log('[GiftPack UI] Global Component Name:('+comName+') Registered.');
            }
        });

    }

}

export default new GpVue();