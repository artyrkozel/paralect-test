import React, { ChangeEvent, useState } from "react";
import logo from '../../common/images/logo.png'
import {useDispatch} from "react-redux";
import { requestUser } from "../../redux/user-reducer";
import { NavLink, useHistory } from "react-router-dom";
import searchIcon from '../../common/images/search-icon.png'
import {actions} from "../../actions/actions";

const NavBar = () => {

    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

    const onKeyPressHandler = async (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && value !== '') {
            dispatch(actions.setNotFound(false))
            await dispatch(requestUser(value))
            history.push('/user/' + value + '/page=1')
            setValue('')
        }
    }
    return (
        <nav className="nav">
                <div className="nav__inner">
                    <NavLink className="logo" to="/"><img src={ logo } alt="logo"/></NavLink>
                    <div className="nav__wrapper">
                        <input className="nav__field" type="text" value={ value } onChange={ onChangeHandler } onKeyPress={ onKeyPressHandler }/>
                        <img className="nav__icon" src={ searchIcon } alt="search icon"/>
                    </div>
                </div>
        </nav>
    )
}

export default NavBar