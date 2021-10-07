import {useState, KeyboardEvent} from 'react';
import * as C from './styles';

// temos que fazer isso para criar as props

type Props = {
    onEnter: (taskName : string) => void
}

export const AddArea = ({onEnter}: Props) => {
    // pegando os dados do input
    const [inputText, setInputText] = useState('');
    
    // evento quando o enter for pressionado, passamos KeyBoardEvent para pegar o codigo da tecla 
    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== '') {
            onEnter(inputText);
            setInputText('');
        }
    }
    return (
        <C.Container>
            <div className="image">➕</div>
            <input 
                type="text"
                placeholder="Adicione uma tarefa"
                value={inputText}
                // pegando o evento, depois o alvo e o valor desse alvo
                onChange={e=>{setInputText(e.target.value)}}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    );
}