const app = Vue.createApp({
    data() {
        return {
            brigadeiro: {lista:[]},
            pastel: {},
            mousse: {},
        }
    },
    methods: {
        async mostraReceita() {
            this.brigadeiro = {
                titulo: 'Brigadeiro',
                lista: ["1 caixa ou lata de leite condensado",
                    "3 colheres de sopa de chocolate em pó",
                    "1 colher de sopa de manteiga",
                    "1/4 de uma xícara de leite",
                    "MODO DE PREPARO: Coloque todos os ingredientes em uma panela misture até começar a desgrudar do fundo da panela, deixe esfriar por aproximadamente 30 minutos"
                ]
            }
            this.pastel = {
                titulo: 'Pastel doce',
                lista: ["Massa de pastel pronta (quantidade desejada)",
                    "2 bloquinhos de um chocolate em barra (de sua preferência)",
                    "MODO DE PREPARO: Coloque o chocolate na massa. Feche com o auxilio de um garfo"
                ]
            }
            this.mousse = {
                titulo: 'Mousse',
                lista: ["1 caixa de creme de leite",
                    "1 caixa de leite condensado",
                    "3 limões grandes",
                    "Uma pitada de sal",
                    "MODO DE PREPARO: misture todos os ingredientes em liquidificador e deixe lá por aproximadamente 5 minutos. Coloque em uma travessa e se desejar coloque raspas da casca do limão"
                ]
            }
        }}
    }).mount("#app");

