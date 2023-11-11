import { useState } from 'react';
import styled from 'styled-components';
import { Dropdown, Modal, Button } from 'react-bootstrap';

// Estilos utilizando styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding-top: 25vh;
  height: 80vh;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 5px;
`;

const LoginButton = styled(Button)`
  margin-bottom: 10px;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #28a745;
    transition: background-color 0.5s ease;
  }
`;

const StyledDropdownToggle = styled(Dropdown.Toggle)`
  &&& {
    button {
      background-color: #038C3E;
      transition: background-color 0.1s ease;

      &:hover {
        background-color: #28a745;
      }
    }
  }
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (username === 'usuario123' && password === 'senha123') {
      setLoginSuccess(true);
    } else {
      setLoginSuccess(false);
    }

    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="Nome de usuário"
        value={username}
        onChange={handleUsernameChange}
      />

      <Input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={handlePasswordChange}
      />

      <LoginButton variant="primary" onClick={handleLogin}>
        Login
      </LoginButton>

      <Dropdown className="mb-3">
        <StyledDropdownToggle variant="primary" id="dropdown-basic">
          Função
        </StyledDropdownToggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Admin</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Usuário</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Convidado</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login {loginSuccess ? 'Bem-sucedido' : 'Falhou'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loginSuccess ? (
            <p>Bem-vindo, {username}! Você fez login com sucesso.</p>
          ) : (
            <p>Nome de usuário ou senha inválido. Por favor, tente novamente.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Login;
