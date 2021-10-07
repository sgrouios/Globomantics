import './house.css';
import { useState } from 'react';
import emailIcon from './Email.png';
import Inquiry from './inquiry';
import '../index.css';
import PropTypes from 'prop-types';

const House = ({house}) => {
    const [inquiryShown, setInquiryShown] = useState(false);
    const inquiryClick = () => {
        setInquiryShown(!inquiryShown);
    }
    return (  
        <div>
            <div className="row mt-2">
                <h5 className="col-md-12">{house.country}</h5>
            </div>
            <div className="row">
                <h5 className="col-md-12">{house.address}</h5>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <img src={`/images/${house.photo}.jpeg`} alt="House" />
                </div>
                <div className="col-md-5">
                    <p className="price">${house.price}</p>
                    <p>{house.description}</p>
                    <img
                        className="pointer"
                        src={emailIcon}
                        height="50"
                        alt="inquiry"
                        onClick={inquiryClick} 
                    />
                    {inquiryShown && <Inquiry house={house}/>}
                </div>
            </div>
        </div>
    );
}
 
House.propTypes = {
    house: PropTypes.object.isRequired
};

export default House;