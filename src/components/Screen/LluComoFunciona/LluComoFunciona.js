import React, {Component} from 'react';
import LluDefaultPage from '../LluDefaultPage/LluDefaultPage';

class LluComoFunciona extends Component {
    render() {
        return (
            <LluDefaultPage>
                <p>Lluqi es un sitio que desea conectar personas: viajeros con habilidades que cambian su trabajo por
                    hospedaje (mas otros servicios), en recintos hoteleros o similares que tienen altas tasas de
                    desocupación, que necesitan cubrir ciertas necesidades y que están dispuestos a hacer ese
                    trueque.</p>
                <h1>Viajeros</h1>
                <p>Para postular sigue el “Paso a Paso” de la pantalla inicial. Crea tu perfil e indica cuales son tus
                    habilidades y las tareas que estarías dispuesto a realizar.
                    Encuentra tu destino y conoce a los recintos disponibles. Hazle saber tu interés como voluntario
                    enviándole un mensaje. Demuestra que eres el perfil adecuado y serás seleccionado.</p>
                <h1>Recintos</h1>
                <p>Para ser parte de nuestra red de asociados colaboradores debes iniciar sesión como “Recintos”. Crea
                    tu perfil subiendo imagenes del recinto, indicanos las tareas en donde necesitas ayuda, tiempo de
                    estadía, meses en los que tienen disponibilidad y que ofrecen a cambio de la colaboración.
                    Los viajeros interesados comenzarán a demostrar interés. Solicita cualquier información relevante
                    que apoye la postulación para luego tomar tu decisión.</p>
            </LluDefaultPage>
        );
    }
}

export default LluComoFunciona;