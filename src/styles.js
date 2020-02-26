import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const TagsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  width: 100%;
  padding: 20px;
  grid-gap: 20px;
`;

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: ${props => (props.selected ? "#2832CC" : "#6B94E8")};
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 6px 6px 7px rgba(0, 0, 0, 0.1);
`;

export const TagResult = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  padding: 20px;
  grid-gap: 20px;
`;

export const OpImage = styled.img`
  width: 100px;
  height: 100px;
`;
