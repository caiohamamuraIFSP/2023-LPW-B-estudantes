Vue.createApp({
    data() {
        return {
            showButton: true,
            songs: [],
            msgLoading: ''
        };
    },
    methods: {
        async loadSongs() {
            this.showButton = false;
            this.msgLoading = "loading...";
            let response = await fetch('songs.json');
            this.songs = await response.json();
            this.msgLoading = "";
        },
    }
}).mount("#app");

