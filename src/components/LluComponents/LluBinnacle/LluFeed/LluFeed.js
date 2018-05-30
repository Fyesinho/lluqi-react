import React , {Component} from 'react';
import LluStay from "../LluStay/LluStay";
//Assets
import './LluFeed.css';
import {getStaysDummy} from "../../LluCommon/LluApi/LluApi";

const firstPage = (result) => ({
    stays: result.content
});

const otherPage = (result) => (prevState) => ({
    stays: [...prevState.stays, ...result.content]
});

class LluFeed extends Component{
    constructor(){
        super();
        this.state = {
            stays: []
        };
        this.handleScrollFixFilter = this.handleScrollFixFilter.bind(this);
        this.onPaginateUpdate = this.onPaginateUpdate.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleScrollFixFilter, false);
    }

    componentWillMount() {
        getStaysDummy().then(response => this.onSetResult(response, 0));
    }

    onPaginateUpdate() {
        getStaysDummy().then(response => this.onSetResult(response, 1));
    }

    onSetResult(result, page) {
        page === 0 ?
            this.setState(firstPage(result)) :
            this.setState(otherPage(result));
    }

    handleScrollFixFilter(e) {
        e.preventDefault();
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 50)) {
            console.log("pagina nueva");
            this.onPaginateUpdate();
        }
    }

    render(){
        return(
            <div className="container llu-feed_stays">
                {this.state.stays && this.state.stays.map((stay, index) => {
                    return <LluStay stay={stay} key={`bitacora_${index}`} />
                })}
            </div>
        )
    }
}

export default LluFeed;