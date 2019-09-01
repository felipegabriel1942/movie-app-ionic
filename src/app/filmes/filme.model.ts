export class FilmeModel {
    constructor(
        public title?: string,
        public poster?: string,
        public anoLancamento?: string,
        public resumoFilme?: string,
        public diretor?: string,
        public genero?: string,
        public bilheteria?: string,
        public premios?: string,
        public roteiristas?: string,
        public duracao?: string,
        public avaliacoes?: Array<any>,
        public site?: string,
        public classificacaoEtaria?: string,
        public idiomaOriginal?: string,
        public atores?: string,
    ) {}
}
