import React from "react";
import { Button } from "../Button"
import { StyledPopup } from "./styles"

export interface PopupConfig{
    type: 'confirm' | 'yesno',
    message: string,
    width?: string,
    height?: string,
    onyes?: () => any,
    onno?: () => any,
    onconfirm?: () => any
}

export interface PopupProps {
    popupHandler: React.Dispatch<any>,
    popupConfig: PopupConfig
}

//This is a simple reusable popup
export const Popup = ({popupConfig, popupHandler} : PopupProps): JSX.Element => {
    const {type, message, width, height, onyes, onno, onconfirm} = popupConfig
    return (
      <StyledPopup width={width} height={height}>
        <div id='popup-main'>
            <div id='content'>{message}</div>
            <div id='footer'>
            {type == "confirm" ? (
            <div>
                <Button onClick={onconfirm? ()=> onconfirm() : () => popupHandler(false)}>OK</Button>
            </div>
            ) : (
            <div>
                <Button onClick={onyes? () => onyes() : () => popupHandler(false)}>Yes</Button>
                <Button backgroundColor="#cf000e" onClick={onno? () => onno() : () => popupHandler(false)}>No</Button>
            </div>
            )}
        </div>
        </div>
        
      </StyledPopup>
    );
}