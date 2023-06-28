Vue.createApp({
    data: () => ({
            mostraBotao: true, 
            especie: [], 
            msgCarregando: '',
    }),
    methods: {
        carregaMacaco: async function() {
            this.mostraBotao = false;
            this.msgCarregando = "Carregando...";
            let resposta = await fetch('macaco.json');
            this.especie = await resposta.json();
            this.msgCarregando = "";
        },
    }
}).mount("#app")