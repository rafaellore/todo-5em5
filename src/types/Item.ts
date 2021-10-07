// aqui setamos valores padroes (tipos) para o item da lista de tarefas
// como setar number para id, string para textos, etc..
// ou seja, é OBRIGATORIO que elas sejam desse tipo
export type Item = {
    id: number;
    name: string;
    done: boolean;
}