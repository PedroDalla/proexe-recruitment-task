import { FormEvent, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { User } from "../../interfaces/user"
import { Button } from "../Button"
import { PopupConfig } from "../Popup"
import { StyledUserForm } from "./styles"

interface UserFormParams {
    users: User[],
    handlePopup: (show: boolean, config?: PopupConfig) => void
}

export const UserForm = ({users, handlePopup}: UserFormParams): JSX.Element => {
    const {id} = useParams<{id: string | undefined}>()
    const history = useHistory()

    const [item, setItem] = useState({
        name: '',
        email: '',
        username: '',
        city: ''
    })

    function handleChange(property: string, value: any){
        setItem({...item, [property] : value})

    }

    useEffect(() => {
        if(id){
            let user = users.find(i => i.id == Number(id))
            if(user){
                setItem({
                    name: user.name,
                    username: user.username || '',
                    email: user.email,
                    city: user.address?.city || ''
                })
            }
        }

    }, [users])

    function handleSubmit(e: FormEvent){
        e.preventDefault()
        if(id){
            handlePopup(true, {
                message: 'Are you sure you wish to commit these changes?',
                type: 'yesno',
                onyes: () => {
                    alert('User changed!')
                }
            })
        } else {
            handlePopup(true, {
                message: 'User successfully created',
                type: 'confirm',
                onconfirm: () => {
                    handlePopup(false)
                    history.push('/')
                }
            })
        }
        
    }



    return (
        <StyledUserForm>
            <div id='form-header'><b>Form</b></div>
            <form onSubmit={e => handleSubmit(e)}>
                <div className='input-container'>
                    <label>Name</label>
                    <input type='text' placeholder="name" value={item.name} onChange={(e) => handleChange('name', e.target.value)} required></input>
                </div>
                <div className='input-container'>
                    <label>Email</label>
                    <input type='email' placeholder="email" value={item.email} onChange={(e) => handleChange('email', e.target.value)}  required></input> 
                </div>
                <div className='input-container'>
                    <label>Username</label>
                    <input type='text' placeholder="username" value={item.username} onChange={(e) => handleChange('username', e.target.value)} ></input>
                </div>
                <div className='input-container'>
                    <label>City</label>
                    <input type='text' placeholder="city" value={item.city} onChange={(e) => handleChange('city', e.target.value)} > 
                    </input>
                </div>
                 <div id='form-footer'>
                    <Button backgroundColor="#cf000e" type='button' onClick={() => history.push('/')}>Cancel</Button>
                    <Button type='submit'>Submit</Button>
                </div>
            </form>
        </StyledUserForm>
    )
}