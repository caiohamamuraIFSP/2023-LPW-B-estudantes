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
        this.aula = Object.keys(this.alunos[this.aluno]).sort()[0];
    },
    mounted() {
        this.w = window.innerWidth;
        window.addEventListener('resize', this.windowResize);
    },
    unmounted() {
        window.removeEventListener('resize', this.windowResize);
    },
    data() {
        return {
            w: 200,
            titulo: 'Aluno',
            aluno: 'Selecione um aluno',
            alunos: [],
            aula: 'Selecione uma aula',
            linkFrame: '',
            porAula: false,
            rail: false,
        }
    },
    computed: {
        listaAulasPorAluno() {
            if (this.alunos.length == 0) return;
            return Object.keys(this.alunos[this.aluno]).sort().map(e => ({
                aula: e,
                link: this.alunos[this.aluno][e],
            }));
        },
        listaAlunosPorAula() {
            if (this.alunos.length == 0) return;
            return Object.keys(this.alunos).sort().map(e => ({
                key: e,
                aluno: e.replaceAll('_', ' '),
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
        listaAulas() {
            if (this.alunos.length === 0) return;
            let umAluno = Object.keys(this.alunos)[0];
            let aulas = Object.keys(this.alunos[umAluno]).sort();
            return aulas.map((key) => ({
                title: `Aula ${key}`,
                value: key,
            }));
        },
    },
    methods: {
        alunoAlterado() {
            this.linkFrame = '';
            this.aula = '';
        },
        aulaAlterada() {
            this.linkFrame = '';
            this.aluno = '';
        },
        trocaIframe(item, event) {
            this.linkFrame = item.link;
            this.aula = item.aula;
        },
        trocaIframeAluno(item, event) {
            this.aluno = item.key;
            this.linkFrame = this.getLink(item);
            this.rail = false;
        },
        getLink(item) {
            return this.alunos[item.key][this.aula.toString()];
        },
        windowResize() {
            this.w = window.innerWidth;
        },
    }
}).use(vuetify).mount('#app')