import { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link para a navegação
import styled from 'styled-components';
import { Dropdown, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const OverlayContainer = styled.div`
  background-color: #8EDC81;
  padding: 10px;
  border-radius: 20px;
  width: 25vw;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  background-color: #28a745;
  padding: 20px;
  border-radius: 15px;
  width: 100%;
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 15px;
  border: none;
  outline: none;
  width: 100%;
  box-sizing: border-box;
`;

const LoginButton = styled(Button)`
  margin-bottom: 15px;
  background-color: #4CAF50;
  border: none;
  border-radius: 15px;
  color: white;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #45a049;
    transition: background-color 0.5s ease;
  }
`;

const StyledDropdownToggle = styled(Dropdown.Toggle)`
  &&& {
    background-color: #4CAF50;
    border-radius: 15px;
    transition: background-color 0.1s ease;
    border: none;

    &:hover {
      background-color: #45a049;
    }
  }
`;

const RegisterButton = styled(Button)`
margin-bottom: 15px;
background-color: #4CAF50; 
border: none;
border-radius: 15px;
color: white;
transition: background-color 0.5s ease;

&:hover {
  background-color: #45a049;
  transition: background-color 0.5s ease;
}
`;

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
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
    <MainContainer>
      <OverlayContainer>
        <FormContainer>
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
              </Dropdown.Menu>
            </Dropdown>

            <RegisterContainer>
              <p style={{ marginBottom: '10px' }}>Ainda não é cadastrado?</p>
              {/* Adiciona Link para navegar para a página de cadastro */}
              <Link to="/cadastro">
                <RegisterButton variant="primary">
                  Cadastre-se
                </RegisterButton>
              </Link>
            </RegisterContainer>
          </Container>
        </FormContainer>
      </OverlayContainer>
    </MainContainer>
  );
};

export default Login;
