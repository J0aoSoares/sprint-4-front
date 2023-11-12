import { useState } from 'react';
import styled from 'styled-components';
import { Dropdown, Modal, Button } from 'react-bootstrap';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #038C3E;
  padding-top: 25vh;
  height: 80vh;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 10px;
`;

const CadastroButton = styled(Button)`
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

const Formulario = () => {
  const [selectedTipoDocumento, setSelectedTipoDocumento] = useState(null);
  const [documentoValue, setDocumentoValue] = useState('');
  const [isAgradecimentoVisible, setIsAgradecimentoVisible] = useState(false);

  const handleTipoDocumentoSelect = (tipoDocumento) => {
    setSelectedTipoDocumento(tipoDocumento);
    setDocumentoValue('');
  };

  const handleCadastrar = () => {
    // Adicione a lógica de validação e exibição da mensagem de agradecimento aqui
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
    <Container>
      <Input type="text" placeholder="Nome" />
      <Input type="number" placeholder="Idade" />
      <Input type="text" placeholder="Endereço" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Senha" />
      <Input type="password" placeholder="Confirmar Senha" />

      <Dropdown className="mb-3">
        <StyledDropdownToggle variant="primary" id="dropdown-basic">
          {selectedTipoDocumento || 'Selecione'}
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
    </Container>
  );
};

export default Formulario;
