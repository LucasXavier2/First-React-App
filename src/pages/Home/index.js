import React, {useState} from 'react';
import * as S from './styled';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function App() {
  const history = useHistory();
  const [usuario, setUsuario] = useState('')
  const [erro, setErro] = useState(false);
  
  function handlePesquisa() {
    const REPO_URL = `https://api.github.com/users/${usuario}/repos`;
    axios.get(REPO_URL)
      .then(response => {
        const repositories = response.data;
        const repositoriesName = repositories.map(repository => repository.name)
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName)); //Salva items no localStorage do navegador
        setErro(false);
        history.push('/repositories'); //Muda para a página /repositories
      })
      .catch(error => {
        setErro(true);
      });
  }

  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input 
          onKeyDown={e => {
            if(e.keyCode === 13) handlePesquisa();
          }} 
          onChange={e => setUsuario(e.target.value)} 
          value={usuario} 
          className='usuarioInput' 
          placeholder='Usuário' 
        />
        <S.Button type='button' onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>
      { erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente</S.ErrorMsg> : ''}      
    </S.HomeContainer>
  );
}

export default App;