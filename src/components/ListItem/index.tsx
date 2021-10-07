import { useState } from 'react';
// importando tudo como c dos estilos
import * as C from './styles';
// importando os tipos de item
import { Item } from '../../types/Item';
// quando usamos props em typescript, precisamos passar um type para elas também

type Props = {
    item: Item,
    onChange: (id: number, done: boolean) => void
}

// props são similares a parametros de funcoes, onde podemos passar na chamada para substitiur algum valor
// aqui setamos que para a prop item, use as especificacoes de item, aquele arquivo com os tipos
export const ListItem = ({item, onChange}: Props) => {
  
    return(
        // podemos passar props para um elemento criado com styled-components também
        <C.Container done ={item.done}>
            <input 
            type="checkbox" 
            checked={item.done}
            onChange={e => onChange(item.id, e.target.checked)}
            />
            <label>{item.name}</label>
        </C.Container>
        )
}