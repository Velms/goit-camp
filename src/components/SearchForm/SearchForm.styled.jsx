import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 360px;

  & > :nth-child(4) {
    margin-top: 32px;
  }
`;

export const LocationLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  color: rgba(16, 24, 40, 0.6);

  svg {
    position: absolute;
    width: 18px;
    height: 20px;
    left: 18px;
    top: 45px;
    fill: none;
    stroke: #101828;
  }

  input {
    padding: 18px;
    padding-left: 44px;
    background-color: #f7f7f7;
    color: #101828;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    border-radius: 10px;
    border: none;

    &::placeholder {
      color: rgba(16, 24, 40, 0.6);
    }
  }
`;

export const Text = styled.p`
  color: #475467;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-top: 32px;
  margin-bottom: 14px;
`;

export const FilterLabel = styled.label`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: #101828;

  hr {
    background-color: rgba(16, 24, 40, 0.1);
    display: block;
    margin: 24px 0;
    opacity: 0.2;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 10px;
`;

export const WrapContent = styled.div`
  position: relative;
  display: flex;
  height: 95px;
  align-items: center;
  justify-content: center;
  width: calc((100% - 2 * 13px) / 3);
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  cursor: pointer;

  input {
    width: 100px;
    height: 80px;
    padding: 15px;
    position: absolute;
    opacity: 0;
    cursor: pointer;
    transition: border 150ms linear;

    &:checked + div {
      border: 1px solid #e44848;
    }
  }
`;

export const Filterbutton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
`;

export const SearchButton = styled.button`
  display: block;
  width: 173px;
  padding: 16px 60px;
  border-radius: 200px;
  background-color: #e44848;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.08px;
  cursor: pointer;
  margin-top: 64px;
  margin-bottom: 24px;
  transition: background-color 150ms linear;

  &:hover {
    background-color: #d84343;
  }
`;
