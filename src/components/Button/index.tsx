import {StyledButton} from './styles'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
    backgroundColor?: string,
    color?: string,
    type?: 'button' | 'submit' |'reset'
}


export const Button = ({children, ...props}:ButtonProps): JSX.Element => {
    return (
        <StyledButton {...props}>{children}</StyledButton>
    )
}
