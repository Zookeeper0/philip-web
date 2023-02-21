import styled from "styled-components";

export const StoreInfoBox = styled.div`
  display: grid;
  width: 100%;
  color: white;
  font-size: 1.6rem;
  font-weight: 300;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export const StoreInfo = styled.div`
  display: flex;
  padding: 0 10px;
  flex-direction: column;
  gap: 10px;
`;

export const StoreNameBox = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-size: 2.8rem;
  font-weight: 500;
  flex-direction: column;
  gap: 5px;
`;

export const CategorySpan = styled.div`
  font-size: 1.8rem;
  font-weight: 400;
`;

export const AddressBox = styled.div`
  letter-spacing: 0;
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
