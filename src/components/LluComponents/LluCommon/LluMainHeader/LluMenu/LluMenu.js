import React, {Component} from 'react';
//Components
import LluAnchor from "../../LluAnchor/LluAnchor";
import LluModalRegisterParent from "../../../../LluModals/LluModalRegister/LluModalRegisterParent";

class LluMenu extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <LluModalRegisterParent/>
                    </li>
                    <li>
                        <LluAnchor>
                            ¡Tengo recinto!
                        </LluAnchor>
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