const app = Vue.createApp({
    data() {
        return {
            Melhores: {lista:[]},
        }
    },
    methods: {
        async mostraMelhores() {
            this.Melhores = {
                titulo: 'Melhores',
                lista: ["MESSI",
                    "CRISTIANO RONALDO",
                    "DYBALA",
                    "PELÉ",
                    "ROGER GUEDES",
                ]
            }
        }}
    }).mount("#app");

