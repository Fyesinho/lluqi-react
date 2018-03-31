import React, {Component} from 'react';
//Components
import LluSteps from "./LluSteps/LluSteps";
//Assets
import './LluHowWorks.css';
import step1 from '../../../../assets/images/paso-1.png';
import step2 from '../../../../assets/images/paso-2.png';
import step3 from '../../../../assets/images/paso-3.png';
import LluButton from "../../LluCommon/LluButton/LluButton";


export const arraySteps = [
    {
        title: "Encuentra tu Destino",
        button: "¡Ver destinos!",
        alt: "encuentra-tu-destino",
        image: step1,
        description: "Postula al destino que elijas completando el formulario con tus datos. Escoge los días y las tareas en donde puedas colaborar"
    },
    {
        title: "Contacta al Anfitrión",
        button: "¡Ver hostales!",
        alt: "contacta-al-anfitrión",
        image: step2,
        description: "Te enviaremos las condiciones y los beneficios a tu correo.\n Si eres seleccionado, puedes contactar con el anfitrión para conocerlo."
    },
    {
        title: "Confirma tu Viaje",
        button: "¡Ver testimonios!",
        alt: "confirma-tu-viaje",
        image: step3,
        description: "Confirmando las condiciones y beneficios que recibirás, puedes confirmar tu viaje. ¡Siéntete 100% seguro que el trueque se cumplirá!."
    },
];

class LluHowWorks extends Component {
    render() {
        return (
            <div className="llu-how_works">
                <h1>
                    ¿Cómo funciona <b>Lluqi.com</b>?
                </h1>
                <div className="llu-row">
                    {arraySteps && arraySteps.map((value, index) => {
                        return <LluSteps key={"llu-steps_" + index}
                                         title={value.title}
                                         alt={value.alt}
                                         image={value.image}
                                         description={value.description}
                                         button={value.button}/>
                    })}
                </div>
                <LluButton className="btn btn-register shadow">¡Quiero registrarme ahora!</LluButton>
            </div>
        )
    }
}

export default LluHowWorks;