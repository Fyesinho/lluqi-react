import React, {Component} from 'react';

class LluComponentMenuUser extends Component {
    render() {
        const texto = 'Hola buenas tardes, mi nombre es Rodrigo Gonzalez';
        return(
            <div className="llu-menu-user mt-2 mb-2">
                <div className="row">
                    <div className="col-2">
                        <img src="https://secure.gravatar.com/avatar/523253cf254ea05c3c81da5b2448724b?s=400&d=mm&r=g" alt="profile"/>
                    </div>
                    <div className="col-10">
                        <div className="row mt-1">
                            <p className="col-9 title-menu-user">Rodrigo Gonzalez</p>
                            <p className="col-3">12:40</p>
                        </div>
                        <div className="row">
                            <p className="col-10 resume">{texto.substring(0,31) + '...'}</p>
                            <p className="col-2"><div className="notify">2</div></p>
                        </div>
                    </div>
                </div>
                <hr style={{widht: '80%'}}/>
            </div>
        )
    }
}

export default LluComponentMenuUser;