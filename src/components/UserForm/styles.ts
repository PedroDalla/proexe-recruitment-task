import styled from "styled-components";

export const StyledUserForm = styled.div`
    border-radius: 5px;
    color: #141414;
    box-shadow: 0px 4px 9px 2px rgba(0,0,0,0.5);

    #form-header{
        border-bottom: 2px solid lightgray;
        font-size: 18px;
        padding: 15px 5px 10px 15px;
    }

    >form{
        display: flex;
        flex-direction: column;
        margin-top: 15px;
        font-size: 18px;
        padding: 3rem 12rem;

        .input-container{
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            margin-bottom: 15px;

            label{
                vertical-align: middle;
            }
            input{
                font-size: 16px;
                min-width: 80%;
                padding: 6px 10px;
                outline: none;
                border: 2px solid lightgrey;
                border-radius: 5px;
            }


        }

        #form-footer{
            margin-top: 3rem;
            margin: 10px 0 10px auto;

            button{
                margin-right: 10px;
            }
        }

    }
`