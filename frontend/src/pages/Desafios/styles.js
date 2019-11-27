import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${props => (props.concluido ? '#009900' : '#FFFFFF')};
`;
