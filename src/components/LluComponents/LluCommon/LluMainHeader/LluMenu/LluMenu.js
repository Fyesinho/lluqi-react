import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
//Components
// import LluModalRegisterParentHostel from "../../../../LluModals/LluModalsRegisterHostal/LluModalRegister/LluModalRegisterParent";
import LluModalsLogin from "../../../../LluModals/LluModalsLogin/LluModalsLogin";
import LluIcon from "../../LluIcon/LluIcon";
import LLuAccessProfile from "../../LluAccessProfile/LLuAccessProfile";
import {openModalRegisterTravelerOne} from "../../../../redux/modules/modal_register_traveler/modal_register_traveler";
import LluModalRegisterTraveler from "../../../../LluModals/LluModalsRegisterTraveler/LluModalRegister/LluModalRegister";

class LluMenu extends Component {
    render() {
        const {openModal} = this.props;
        const user = sessionStorage.getItem('user');
        const style = {
            color: '#575756'
        };
        return (
            <nav>
                {user ?
                    <ul>
{/*                        <li>
                            <Link style={style} to='/bitacora'>Bitácora</Link>
                        </li>*/}
                        <li>
                            <Link style={style} to='/chat'><LluIcon className="fas fa-comments"/> Chat</Link>
                        </li>
                        <li>
                            {user.is_premium? null : <Link style={style} to='/prepago'><LluIcon className="fas fa-credit-card"/> Quiero ser PRO</Link>}
                        </li>
                        <li>
                            <div style={style}>
                                <LLuAccessProfile/>
                            </div>
                        </li>
                    </ul> :
                    <ul>
                        <li>
                            <a id="register_traveler" key="llu-modal_register_anchor" onClick={openModal}>¡Quiero Viajar!</a>
                            <LluModalRegisterTraveler/>
                        </li>
                        {/*<li>*/}
                            {/*<LluModalRegisterParentHostel/>*/}
                        {/*</li>*/}
                        <li>
                            <LluModalsLogin/>
                        </li>
                    </ul>
                }
            </nav>
        )
    }
}



const mapDispatchToProps = dispatch => ({
   openModal: payload => dispatch(openModalRegisterTravelerOne(payload))
});

export default connect(null, mapDispatchToProps)(LluMenu);