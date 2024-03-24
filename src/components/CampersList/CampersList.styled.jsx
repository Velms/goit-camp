import styled from 'styled-components';

export const Img = styled.img`
  width: 290px;
  height: 310px;
  border-radius: 10px;
  object-fit: cover;
`;

export const AdvertsWrap = styled.div`
  display: flex;
  width: 526px;
  flex-direction: column;

  > *:not(:first-child) {
    margin-bottom: 24px;
  }

  > :last-child {
    margin-bottom: 0;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
`;

export const PriceWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

export const Price = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
`;

export const RatingWrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;

  p {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Description = styled.p`
  overflow: hidden;
  color: #475467;
  text-overflow: ellipsis;
  font-size: 16px;
  line-height: 24px;
  white-space: nowrap;
`;

export const CategoriesList = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
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

export const Button = styled.button`
  display: block;
  padding: 16px 40px;
  width: 166px;
  height: 56px;
  border-radius: 200px;
  background: #e44848;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.08px;
  transition: background-color 150ms linear;

  &:hover {
    background-color: #d84343;
  }
`;
