import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 64px;
  margin-top: 30px;
`;

export const Catalog = styled.div`
  width: 888px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const AdvertsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const AdvertsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border-radius: 20px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  padding: 24px;
`;

export const Button = styled.button`
  padding: 16px 32px;
  border-radius: 200px;
  border: 1px solid rgba(71, 84, 103, 0.2);
  color: #101828;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.08px;
  margin: 0 auto 24px;
  transition: border 150ms linear;

  &:hover {
    border: 1px solid var(--Button, #e44848);
  }
`;
