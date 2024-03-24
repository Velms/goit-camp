import styled from 'styled-components';

export const AdvertsWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 10px;
`;

export const RatingWrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;

  p {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 16px;
  }
`;

export const Price = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 24px;
`;

export const MainWrap = styled.div`
  overflow-y: auto;
  max-height: 474px;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 50px;
    margin: 15px 0;
  }
`;

export const ImgList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  overflow-x: auto;
  margin-bottom: 24px;

  li {
    display: flex;
    align-items: center;
    flex-direction: row;
    width: calc(100% / 3);
    min-height: 300px;
  }

  img {
    border-radius: 10px;
    object-fit: cover;
    width: 100%;
    align-self: stretch;
  }
`;

export const Description = styled.p`
  color: #475467;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;

export const Tabs = styled.div`
  margin-top: 44px;
  position: relative;

  & hr {
    display: block;
    background-color: rgba(16, 24, 40, 0.2);
    margin-top: 24px;
    margin-bottom: 0;
    opacity: 0.2;
  }
`;

export const TabButton = styled.button`
  margin-right: 40px;
  color: #101828;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  cursor: pointer;

  &.active::after {
    position: absolute;
    top: 45.5px;
    display: block;
    content: '';
    width: 85px;
    height: 4px;
    background-color: #e44848;
  }
`;

export const TabsContent = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 44px;
`;
