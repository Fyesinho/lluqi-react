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
        url: '/destinos',
        description: "Selecciona tu próximo destino y encuentra la oportunidad de intercambio que te ofrecen los anfitriones del lugar. Recuerda! cada uno ofrece distintos beneficios, así es que recomendamos que navegues con tiempo."
    },
    {
        title: "Contacta al Anfitrión",
        button: "¡Ver hostales!",
        alt: "contacta-al-anfitrión",
        image: step2,
        url: '/destinos',
        description: "¿Ya encontraste al indicado? Inicia una amigable conversación y conoce a fondo la oferta. Demuéstrales tus ganas de colaborar!"
    },
    {
        title: "Confirma tu Viaje",
        button: "¡Ver testimonios!",
        alt: "confirma-tu-viaje",
        image: step3,
        url: '/destinos',
        description: "Una vez que aclaren sus expectativas y sean el uno para el otro, ya pueden confirmar tu puesto en el lugar! El anfitrión te esperará con los brazos abiertos :)"
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
                                         url={value.url}
                                         image={value.image}
                                         description={value.description}
                                         button={value.button}/>;
                    })}
                </div>
                {/*<LluButton className="btn btn-register shadow">¡Quiero registrarme ahora!</LluButton>*/}
            </div>
        );
    }
}

export default LluHowWorks;