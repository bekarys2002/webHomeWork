new Vue({
    el: "#app",
    data: {
        currentView: 'pervaya_mawina'
    },
    components: {
        pervaya_mawina: {
            template: '#pervaya_mawina_template'
        },
        vtoraya_mawina: {
            template: '#vtoraya_mawina_template'
        },
        tret_mawina: {
            template: '#tret_mawina_template'
        },
        
    },
    methods: {
        switchView: function(view) {
            this.currentView = view
        }
    }
})