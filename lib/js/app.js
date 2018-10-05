var app = new Vue({
    el: '#app',
    data: {

        message: 'Hello Vue!'
    },
    methods: {

        mountTableCharts: function() {
            tableWrappers = document.querySelectorAll('.chart-wrapper')
            console.log(tableWrappers)
            for (i=0;i<tableWrappers.length;i++) {
                tableWrapper = tableWrappers[i]
                if (! tableWrapper.getAttribute('id')) {
                    tableWrapper.setAttribute('id', 'wrap-table-' + (i+1))
                }
                id = tableWrapper.getAttribute('id')
                new TableChart().$mount('#'+id)
            }
        }
    },
    created: function () {
        // `this` points to the vm instance
        console.log('message is: ' + this.message)
        this.mountTableCharts()
    }
})