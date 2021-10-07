import { useState } from 'react';
// aqui estamos importando tudo de App.styles usando ES6
// vc pode nomear C doq quiser
import * as C from './App.styles';
// aqui importamos o item que já está "tipado", como id ser number etc..
import { Item } from './types/Item';
// aqui importamos o componente de item da lista
// como não colocamos o nome do item, ele procura na pasta o arquivo index
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea'

const App = () => {
  
  // useState é similar a variaveis, onde como o proprio nome sugere, podemos alterar com o tempo
  // aqui, neste caso, criamos um array
  // como estamos utilizando Typescript, conseguimos definir um padrão de valores usando o item, previamente importado
  // setamos para que dentro desse state tenha item, não só como tambem um array de itens

  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar o pão na padaria', done: false },
    { id: 2, name: 'Comprar um bolo na padaria', done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push(
      {id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList);
  }

  // Função feita para tarefinha de casa.
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask}/>
       
        {/*
         Aqui usamos .map, que  percorre todos os itens do array, como também nos devolve um novo Array
         map também nos permite, além de pegar o valor de cada item, o indice e o array
         neste caso só estamos usando o valor do item e o indice dele
         .map espera uma funcao, neste caso é uma arrow function
        */}

        {/*
          Repare que para usar Javacript puro, preciamos envolver em chaves
        */}
        
        {list.map((item, index)=>(
          // para acessar os dados, use chave
          // Mandamos aqui os dados como prop, que podem ser alterados
         <ListItem key={index} item={item} onChange={handleTaskChange}/>
          ))}

      </C.Area>
    </C.Container>
  );
}

export default App;