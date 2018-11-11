import React from 'react';
import LluDefaultPage from '../LluDefaultPage/LluDefaultPage';

class LluQuienesSomos extends React.Component {
    render() {
        return (
            <LluDefaultPage>
                <h1 className={'mb-1'} style={{color: '#ffb400'}}>Nuestra Misión</h1>
                <p style={{textAlign: 'justify'}}>La misión de lluqi.com es hacer que los viajes sean mas económicos haciendo desaparecer los gastos
                    principales de esta actividad como el alojamiento en el destino.</p>
                <img src={'https://i1.wp.com/www.ingeniatec.es/Images/image/Inicio/equipo-ingeniatec.jpg'} alt={'algo'}/>
                <h1 className={'mb-1'} style={{color: '#ffb400'}}>Nuestra Visión</h1>
                <p style={{textAlign: 'justify'}}>La visión corporativa es hacer que cada persona del mundo tenga acceso a vivir la experiencia de
                    viajar, en una forma colaborativa y social.</p>
                <img src={'https://picrun.es/wp-content/uploads/2015/07/trabajo-en-equipo.jpg'} alt={'algo'}/>
                <h1 className={'mb-1'} style={{color: '#ffb400'}}>Nuestros Objetivos</h1>
                <p style={{textAlign: 'justify'}}>Los objetivos de lluqi.com son, primordialmente, tener presencia nacional e internacional a nivel de
                    recintos hoteleros asociados para ser capaz de recibir a todo viajero que busca un destino por
                    conocer. Asi como tambien, tener fuerte presencia en las vidas de los viajeros del mundo
                    "millenials" para ser su opción primordial al momento de viajar.</p>
            </LluDefaultPage>
        );
    }
}

export default LluQuienesSomos;