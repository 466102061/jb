import toastTpl from './indexH5.vue'


export default {
    install(Vue, options) {

        let $vm = null;

        if (!$vm) {
            const toastVue = Vue.extend(toastTpl);

            $vm = new toastVue({
                el: document.createElement('div')
            });
            document.body.appendChild($vm.$el);
        }

        $vm.show = false;

        const toast = function(tips){
            $vm.show = true;
            if (tips) {
                $vm.tips = tips;
            }
	        setTimeout(function () {
	           $vm.show = false;
	        }, 2500)
        }

        if (!Vue.$toast) {
            Vue.$toast = toast;
        }

        Vue.mixin({
            created() {
                this.$toast = Vue.$toast;
            }
        });
    }
}