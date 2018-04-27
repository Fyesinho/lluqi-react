import React, {Component} from 'react';
//Components
import LluAnchor from "../../LluAnchor/LluAnchor";
import LluModalRegisterParentTraveler from "../../../../LluModals/LluModalsRegisterTraveler/LluModalRegister/LluModalRegisterParent";
import LluModalRegisterParentHostel from "../../../../LluModals/LluModalsRegisterHostal/LluModalRegister/LluModalRegisterParent";

class LluMenu extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <LluModalRegisterParentTraveler/>
                    </li>
                    <li>
                        <LluModalRegisterParentHostel/>
                    </li>
                    <li>
                        <LluAnchor className="enfasis">
                            Iniciar Sesión
                        </LluAnchor>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default LluMenu;