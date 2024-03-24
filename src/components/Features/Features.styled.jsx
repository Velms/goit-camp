import styled from 'styled-components';

export const Container = styled.div`
  max-width: 430px;

  & hr {
    display: block;
    background-color: rgba(16, 24, 40, 0.1);
    margin-top: 24px;
    margin-bottom: 24px;
    opacity: 0.2;
  }
`;

export const CategoriesList = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 44px;
`;

export const CategoriesItem = styled.li`
  display: flex;
  padding: 12px 18px;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  background: #f2f4f7;
  color: #101828;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;

export const Title = styled.p`
  color: #101828;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 24px;
`;

export const DetailsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;

  & li {
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
  }
`;
