import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//Components
import LluAnchor from "../../LluAnchor/LluAnchor";
import LluModalRegisterParentTraveler from "../../../../LluModals/LluModalsRegisterTraveler/LluModalRegister/LluModalRegisterParent";
import LluModalRegisterParentHostel from "../../../../LluModals/LluModalsRegisterHostal/LluModalRegister/LluModalRegisterParent";
import LluModalsLogin from "../../../../LluModals/LluModalsLogin/LluModalsLogin";
import LluIcon from "../../LluIcon/LluIcon";
import LLuAccessProfile from "../../LluAccessProfile/LLuAccessProfile";


class LluMenu extends Component {
    render() {
        const user = sessionStorage.getItem('user');
        const style = {
            color: '#575756'
        };

        return (
            <nav>
                {user ?
                    <ul>
                        <li>
                            <Link style={style} to='/bitacora'>Bitácora</Link>
                        </li>
                        <li>
                            <LluAnchor><LluIcon className="fas fa-envelope"/> Mensajes</LluAnchor>
                        </li>
                        <li>
                            <Link style={style} to={`/profile/${user}`}>
                                <LLuAccessProfile/>
                            </Link>
                        </li>
                    </ul> :
                    <ul>
                        <li>
                            <LluModalRegisterParentTraveler/>
                        </li>
                        <li>
                            <LluModalRegisterParentHostel/>
                        </li>
                        <li>
                            <LluModalsLogin/>
                        </li>
                    </ul>
                }
            </nav>
        )
    }
}

export default LluMenu;