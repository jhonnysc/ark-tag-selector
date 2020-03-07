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
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`;

export const OpImage = styled.img`
  width: 100px;
  height: 100px;
  min-width: 100px;
  min-height: 100px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const ResultCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ccd7ff;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: red;
  }

  & > li {
    list-style-type: none;
    font-size: 15px;
    background-color: #d1d3ff;
    margin-left: 20px;
    border-radius: 10px;

    :hover {
      background-color: gray;
    }
  }

  & > span {
    color: blue;
  }
`;
