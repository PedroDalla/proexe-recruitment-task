import styled from "styled-components";

export const StyledPopup = styled.div<{width?: string, height?: string}>`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.2);

    #popup-main{
        width:  ${({width}) => width? width : '800px' };
        width:  ${({height}) => height? height : '600px' };
        z-index: 10;
        box-shadow: 0px 4px 9px 2px rgba(0,0,0,0.5);
        background: white;
        border-radius: 5px;
        padding: 20px;

        position: relative;
        margin: 0 auto;
        top: 25%;

        #content{
            display: flex;
            justify-content: center;
            margin: 0 auto;
            font-size: 18px;
            margin-top: 20px;
            margin-bottom: 30px;
        }

        #footer{
            margin-top: 15px;
            display: flex;
            justify-content: flex-end;

            button{
                margin-right: 10px;
            }
        }
    }
`