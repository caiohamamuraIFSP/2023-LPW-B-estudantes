const app = Vue.createApp({
    data() {
        return {
            Atividades: {lista:[]},
        }
    },
    methods: {
        async mostraAtividades() {
            this.Atividades = {
                titulo: 'Atividades',
                lista: ["Trabalho de Biologia sobre Excicatas",
                    "Atividade da Aula 11 de LPW",
                    "Autoavaliação de Sociologia",
                    "Atividade avaliativa de Everton (Matemática)",
                ]
            }
        }}
    }).mount("#app");

