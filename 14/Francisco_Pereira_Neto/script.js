const app = Vue.createApp({
    data() {
        return {
            Melhores: {lista:[]},
        }
    },
    methods: {
        async mostraMelhores() {
            this.Melhores = {
                titulo: 'Corinthians',
                lista: ["Cassio",
                    "Roger Guedes",
                    "Yuri Alberto",
                    "Maycon",
                    "Fagner",
                    "Gil",
                ]
            }
        }}
    }).mount("#app");

