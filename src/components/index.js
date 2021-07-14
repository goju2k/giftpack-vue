const myMixin = {
    computed: {
        _gpBorderStyle() {
            let style = '';
            const gpOption = this.$options.gpOption;
            if (gpOption.borderStyle == 'round') {
                style = 'border-radius:'+(!gpOption.borderRadius?'5px':gpOption.borderRadius)+';';
            }
            return style;
        },
    }
}

const GpVue = function () {

    this.install = function (app, option) {

        option = option || {};

        //Component Global Registration
        const ctx = require.context('./', true, /\.vue$/);

        ctx.keys().forEach(key => {
            const regInfo = key.match(/\/(\w+)\.vue/);
            const comName = regInfo?regInfo[1]:null;
            if (comName && (!option.useList || option.useList.length == 0 || option.useList.includes(comName))
            ) {
                const com = ctx(key).default;
                com.gpOption = option;
                com.mixins = [myMixin];
                app.component(comName, com);
                console.log('[GiftPack UI] Global Component Name:('+comName+') Registered.');
            }
        });

    }

}

export default new GpVue();