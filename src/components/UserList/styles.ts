import styled from "styled-components";

export const StyledUserList = styled.div`
  display: flex;
  flex-direction: column;
  
  #user-list-container {
    border-radius: 5px;
    color: #141414;
    box-shadow: 0px 4px 9px 2px rgba(0,0,0,0.5);
    padding: 5px;

    #user-list-header {
      display: flex;
      justify-content: space-between;
      padding: 5px 15px;
      margin-top: 5px;

      > div {
        font-size: 18px;
      }
    }

    > table {
      width: 98%;
      margin: 10px auto;
      border-radius: 5px;
      border: 2px solid lightgrey;
      border-collapse: collapse;
      font-size: 16px;
      text-align: center;

      > thead {
        background: #ededed;
      }

      tr {
        height: 4rem;
        border-bottom: 2px solid lightgrey;
        
        td{
            min-width: 200px;
        }
      }
    }
  }
`;
