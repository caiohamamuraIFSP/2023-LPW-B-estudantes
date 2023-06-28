Vue.createApp({
    data: () => ({
            mostraBotao: true, 
            treino: [], 
            msgCarregando: '',
    }),
    methods: {
        carregaTreinos: async function() {
            this.mostraBotao = false;
            this.msgCarregando = "Carregando...";
            let resposta = await fetch('treinos.json');
            this.treino = await resposta.json();
            this.msgCarregando = "";
        },
    }
}).mount("#app")