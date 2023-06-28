Vue.createApp({
    data: () => ({
            mostraBotao: true, 
            raca: [], 
            msgCarregando: '',
    }),
    methods: {
        carregaCachorro: async function() {
            this.mostraBotao = false;
            this.msgCarregando = "Carregando...";
            let resposta = await fetch('cachorro.json');
            this.raca = await resposta.json();
            this.msgCarregando = "";
        },
    }
}).mount("#app")