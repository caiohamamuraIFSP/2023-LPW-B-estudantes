const { createApp } = Vue
const { createVuetify } = Vuetify


const vuetify = createVuetify({
    theme: {
        defaultTheme: 'dark'
    }
});

createApp({
    async created() {
        this.alunos = await (await fetch('alunos.json')).json();
        this.aluno = Object.keys(this.alunos)[0];
    },
    data() {
        return {
            titulo: 'Aluno',
            aluno: 'João',
            alunos: [],
            aula: '',
            rail: true,
            linkFrame: '',
        }
    },
    computed: {
        aulas() {
            if (this.alunos.length == 0) return;
            return Object.keys(this.alunos[this.aluno]).sort().map(e => ({
                aula: e,
                link: this.alunos[this.aluno][e],
            }));
        },
        nomeAluno() {
            return this.aluno.replaceAll('_', ' ');
        },
        listaAlunos() {
            console.log(Object.keys(this.alunos));
            return Object.keys(this.alunos).map((key) => ({
                title: key.replaceAll('_', ' '),
                value: key,
            }));
        },
    },
    methods: {
        alterado(){
            this.linkFrame = '';
            this.aula = '';
        },
        focadoAutocomplete(event) {
            console.log(event);
            let input = event.target;
            input.focus();
            input.select();
            input.setSelectionRange(0,input.value.length);
        },
        trocaIframe(item, event) {
            this.linkFrame = item.link;
            this.aula = item.aula;
        }
    }
}).use(vuetify).mount('#app')