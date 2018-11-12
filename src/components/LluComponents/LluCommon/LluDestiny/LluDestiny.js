import React, {Component } from 'react';
import LluAnchor from "../LluAnchor/LluAnchor";
import LluIcon from "../LluIcon/LluIcon";

class LluDestiny extends Component{
    render(){
        const {destiny: {city}} = this.props;
        const image = `https://admin.lluqi.com/media/${city.media[0].id}/${city.media[0].file_name}`;
        return(
            <div className="llu-destinations__body shadow-box">
                <div>
                    <figure>
                        <img
                            src={image}
                            alt="viaje1"/>
                        <figcaption>
                            <p className="canvas">
                                <LluIcon className="fa fa-map-marker"/> {city.city}
                            </p>
                            <div className="title-destinations">
                                <h2>
                                    {city.city}
                                </h2>
                            </div>
                            <p className="body-destinations">
                                {city.description}
                            </p>
                            <LluAnchor>
                                <p className="body-informations">
                                    <LluIcon className="fa fa-eye"/> Ver mas información
                                </p>
                            </LluAnchor>
                        </figcaption>
                    </figure>
                </div>
                {/*<div className="interactions-destinations">*/}
                    {/*<hr/>*/}
                    {/*<div className="row-flex">*/}
                        {/*<div className="col-3" style={{padding: 0, borderRight: "1px solid #e5e5e5"}}><LluIcon*/}
                            {/*className="far fa-heart"/><br/>wishlist*/}
                        {/*</div>*/}
                        {/*<div className="col-3" style={{padding: 0, borderRight: "1px solid #e5e5e5"}}><LluIcon*/}
                            {/*className="fas fa-share-alt"/><br/>compartir*/}
                        {/*</div>*/}
                        {/*<div className="col-3" style={{padding: 0, borderRight: "1px solid #e5e5e5"}}><LluIcon*/}
                            {/*className="fas fa-image"/><br/>ver anfitriones*/}
                        {/*</div>*/}
                        {/*<div className="col-3" style={{padding: 0}}><LluIcon*/}
                            {/*className="far fa-map"/><br/>ver en mapa*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default LluDestiny;