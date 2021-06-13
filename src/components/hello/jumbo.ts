import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 0.2;
  color: ${(props) => props.theme.color.black};
`;

const Lead = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
`;

const Jumbo = styled.section`
  padding: 4rem 2rem;
  background-color: ${(props) => props.theme.color.grey};
  border-radius: ${(props) => props.theme.border.radius};
`;

const Separator = styled.hr`
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
`;

export { Title, Lead, Separator };

export default Jumbo;
