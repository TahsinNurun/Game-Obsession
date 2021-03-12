import { useEffect, useState } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

import fbIcon from '../../Icon/Facebook.png';
import twIcon from '../../Icon/Twitter.png';
import yoIcon from '../../Icon/YouTube.png';

import maleImage from '../../Photo/male.png';
import femaleImage from '../../Photo/female.png';






import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFutbol, faLocationArrow, faTransgender } from '@fortawesome/free-solid-svg-icons'

const TeamDetail = () => {
    const { idTeam } = useParams()
    const [teamDetails, setTeamDetails] = useState({});


    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams[0]))
    }, [idTeam])



    return (
        <div >
            <Image style={{ height: '15rem', width: '100%',opacity: '0.6'}} src={teamDetails.strTeamBanner} fluid />

            <div className="container " style={{ backgroundColor: 'powderBlue', display: 'flex', padding: '4rem',borderRadius:'10px' }}>
                <div className ="row">
                    <div className="col-md-6 col-sm-12">
                        <h3>Team Name:{teamDetails.strTeam}</h3>
                        <br />
                        <h4> <FontAwesomeIcon icon={faLocationArrow} /> Founded : {teamDetails.intFormedYear}</h4>
                        <h4><FontAwesomeIcon icon={faFlag} /> Country : {teamDetails.strCountry}</h4>
                        <h4><FontAwesomeIcon icon={faFutbol} /> Sport  Type : {teamDetails.strSport}</h4>
                        <h4><FontAwesomeIcon icon={faTransgender} />Gender : {teamDetails.strGender}</h4>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img
                            src={teamDetails.strGender === 'Male' ? maleImage : femaleImage}
                            className="img-fluid"
                            alt="..."
                        />
                    </div>
                </div>
            </div>
            <div className="container">
                <p style ={{textAlign:'justify',margin:'1rem 1rem' }}>{teamDetails.strDescriptionEN}</p>
            </div>
            <div className="container">
                <h2 style ={{textAlign:'center'}}>
                        <a href={`https://${teamDetails.strFacebook}`}><img style={{ width: '50px',margin:'1rem' }} src={fbIcon} alt="" /></a>
                        <a href={`https://${teamDetails.strTwitter}`}><img style={{ width: '50px',margin:'1rem' }} src={twIcon} alt="" /></a>
                        <a href={`https://${teamDetails.strYoutube}`}><img style={{ width: '50px',margin:'1rem' }} src={yoIcon} alt="" /></a>
                </h2>
            </div>
            </div>
    );
};

export default TeamDetail;