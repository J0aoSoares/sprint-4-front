import { useState } from 'react';
import styled from 'styled-components';
import { Dropdown, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const OverlayContainer = styled.div`
background-color: #8EDC81;
padding: 10px;
border-radius: 20px;
width: 30vw;
height: 40vh;
display: flex;
justify-content: center;
align-items: center;
`;

const FormContainer = styled.div`
  background-color: #28a745;
  padding: 20px;
  border-radius: 15px;
  width: 100%; 
  max-width: 400px; 
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

const CadastroButton = styled(Button)`
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

const Formulario = () => {
  const [selectedTipoDocumento, setSelectedTipoDocumento] = useState(null);
  const [documentoValue, setDocumentoValue] = useState('');
  const [isAgradecimentoVisible, setIsAgradecimentoVisible] = useState(false);

  const handleTipoDocumentoSelect = (tipoDocumento) => {
    setSelectedTipoDocumento(tipoDocumento);
    setDocumentoValue('');
  };

  const handleCadastrar = () => {
    if (selectedTipoDocumento && documentoValue.trim() !== '') {
      setIsAgradecimentoVisible(true);
    } else {
      alert('Preencha todos os campos antes de cadastrar.');
    }
  };

  const handleCloseAgradecimento = () => {
    setIsAgradecimentoVisible(false);
  };

  return (
    <MainContainer>
      <OverlayContainer>
        <FormContainer>
          <Input type="text" placeholder="Nome Completo" />
          <Input type="date" placeholder="Data de Nascimento" />
          <Input type="text" placeholder="Endereço" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Senha" />
          <Input type="password" placeholder="Confirmar Senha" />

          <Dropdown className="mb-3">
            <StyledDropdownToggle variant="primary" id="dropdown-basic">
              {selectedTipoDocumento || 'CPF/CNPJ'}
            </StyledDropdownToggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleTipoDocumentoSelect('CPF')}>CPF</Dropdown.Item>
              <Dropdown.Item onClick={() => handleTipoDocumentoSelect('CNPJ')}>CNPJ</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {selectedTipoDocumento && (
            <Input
              type="text"
              placeholder={`Digite seu ${selectedTipoDocumento}`}
              value={documentoValue}
              onChange={(e) => setDocumentoValue(e.target.value)}
            />
          )}

          <CadastroButton onClick={handleCadastrar}>Cadastrar</CadastroButton>

          <Modal show={isAgradecimentoVisible} onHide={handleCloseAgradecimento} centered>
            <Modal.Header closeButton>
              <Modal.Title>Agradecemos pelo Cadastro!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Seu cadastro foi recebido com sucesso. Agradecemos por escolher nosso serviço.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleCloseAgradecimento}>
                Fechar
              </Button>
            </Modal.Footer>
          </Modal>
        </FormContainer>
      </OverlayContainer>
    </MainContainer>
  );
};

export default Formulario;
