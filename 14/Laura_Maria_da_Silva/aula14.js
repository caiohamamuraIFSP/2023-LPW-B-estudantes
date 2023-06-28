Vue.createApp({
    data: () => ({
            mostraBotao: true, 
            disney: [], 
            msgCarregando: '',
    }),
    methods: {
        carregadisney: async function() {
            this.mostraBotao = false;
            this.msgCarregando = "Carregando...";
            let resposta = await fetch('disney.json');
            this.disney = await resposta.json();
            this.msgCarregando = "";
        },
    }
}).mount("#app")