import styled from "styled-components";

export const TableButton = styled.div`
  button {
    background-color: ${(props) => props.color};
    border: none;
    font-size: 1.1rem;
    text-align: start;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: White;
    max-width: 100%;
    width: ${(props) => (props.width ? "100%" : "150px")};
    box-shadow: 0 0 5px rgb(0 0 0 /20%);
    height: 40px;
    border-radius: 3px;
    span {
      flex: 1 1 90%;
      padding: 0.5em;
      text-align: center;
    }

    .icon {
      flex: 0 0 40px;
      background-color: ${(props) => props.subcolor};
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 1px 0px 0px 0px rgb(0 0 0 /25%);
      overflow: hidden;
      border-radius: 3px;

      i {
        font-size: 0.8rem;
      }
    }
  }
`;
export default TableButton;
