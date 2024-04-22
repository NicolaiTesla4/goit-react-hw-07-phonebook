import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../../redux/contacts-selectors.js'
import css from './ContactList.module.css'


export default function ContactList({filteredContact }) {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users.contacts)
    const filtered = useSelector((state) => state.users.filter)
    let listContacts=[]

        if (filtered.filter) {
        listContacts = filteredContact.map(element => {
        return (<li key={element.id} >{element.name}: {element.number}
            <button className={css.button}
            onClick={(e) => {dispatch(deleteUser(element.id))}}>Delete</button>
        </li>)
        })
    }

    else { 
        listContacts = users.map(element => { 
            return (<li key={element.id} >{element.name}: {element.number}
                <button className={css.button}
                onClick={(e) => {dispatch(deleteUser(element.id))}}>Delete</button>
            </li>)
        })
    }

    return (
        <ul>{listContacts}</ul>
    )
    }