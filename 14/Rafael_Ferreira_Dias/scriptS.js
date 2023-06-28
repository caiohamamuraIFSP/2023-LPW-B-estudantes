let app = Vue.createApp({
    data() {
        return {
            visivel: true,
            carregar: "",
            pokemons: []
        }
    },
    methods: {
        button: async function() {
            this.carregar = "Carregando...";
            this.visivel = false;
            let resposta = await fetch('pokedex.json');
            this.pokemons = await resposta.json();
            this.carregar = "";
        },
    }
}).mount("#app");