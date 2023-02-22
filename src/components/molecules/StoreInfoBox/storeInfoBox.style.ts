import styled from "styled-components";

export const StoreInfoBox = styled.div`
  display: grid;
  width: 100%;
  color: white;
  font-size: 1.6rem;
  font-weight: 300;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  //모바일 화면 설정
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    grid-gap: 0;
  }
`;

export const StoreInfo = styled.div`
  display: flex;
  padding: 0 10px;
  flex-direction: column;
  gap: 10px;

  //모바일 화면 설정
  @media screen and (max-width: 768px) {
    padding: 30px 16px;
  }
`;

export const StoreNameBox = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-size: 2.8rem;
  font-weight: 500;
  flex-direction: column;
  gap: 5px;

  //모바일 화면 설정
  @media screen and (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const CategorySpan = styled.div`
  font-size: 1.8rem;
  font-weight: 400;

  //모바일 화면 설정
  @media screen and (max-width: 768px) {
    color: ${(props) => props.theme.colors.categorySubTxt};
    font-size: 1.8rem;
  }
`;

export const AddressBox = styled.div`
  letter-spacing: 0;

  //모바일 화면 설정
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

export const PhoneBox = styled.div`
  display: flex;
  letter-spacing: 0;
  align-items: center;
  gap: 20px;

  span {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;
