Vue.createApp({
    data() {
        return {
            showButton: true,
            songs: [],
            msgCarreg: ''
        };
    },
    methods: {
        async loadSongs() {
            this.showButton = false;
            this.msgCarreg = "Carregando...";
            let response = await fetch('songs.json');
            this.songs = await response.json();
            this.msgCarreg = "";
        },
    }
}).mount("#app");
