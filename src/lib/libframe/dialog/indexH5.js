import dialogTpl from './indexH5.vue'


export default {
    install(Vue, options) {

        let $vm = null;
        
        if (!$vm) {
            const dialogVue = Vue.extend(dialogTpl);

            $vm = new dialogVue({
                el: document.createElement('div')
            });
            document.body.appendChild($vm.$el);
        }

        $vm.show = false;

        const dialog = function(opts){
            $vm.show = true;
            const option ={
                title : '提示信息',
                content : '',
                showCancel : true,//显示取消按钮
                cancelText : '取消',
                cancelColor : '#000',
                confirmText : '确认',
                confirmColor : '#ffbe00',
                cancelCallback : function(){},
                confirmCallback : function(){}
            }
            const opt = Object.assign(option,opts);
            $vm.opts = opt;
        }

        if (!Vue.$dialog) {
            Vue.$dialog = dialog;
        }

        Vue.mixin({
            created() {
                this.$dialog = Vue.$dialog;
            }
        });
    }
}