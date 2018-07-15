import LoadingComponent from './indexH5.vue'

export default {
    install(Vue, options) {

        let $vm = null;

        if (!$vm) {
            const LoadingPlugin = Vue.extend(LoadingComponent);

            $vm = new LoadingPlugin({
                el: document.createElement('div')
            });
            document.body.appendChild($vm.$el);
        }

        $vm.show = false;

        let loading = {
            show(txt) {
                $vm.show = true;

                if (txt) {
                    $vm.text = txt;
                }
            },
            hide() {
                $vm.show = false;
            }
        }

        if (!Vue.$loading) {
            Vue.$loading = loading;
        }

        Vue.mixin({
            created() {
                this.$loading = Vue.$loading;
            }
        });
    }
}