import React from 'react';

import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'


const Team = (props) => {
    const { strSport, strTeamBadge,strDescriptionEN,idTeam } = props.team;
    const history = useHistory();
    const showTeamDetails = idTeam =>{
        const url = `team/${idTeam}`;
        history.push(url);

    }

    return (
        
        <div  className="container"  >
            <Card className ="shadow p-3 mb-5 bg-body rounded" style={{ backgroundColor:'AliceBlue',width: '18rem',float:'left', margin:'2rem',Padding:'2rem',height:'40rem'}}>
                <Card.Img variant="top" src={strTeamBadge} />
                <Card.Body style={{overflow:'hidden'}}>
                    <Card.Title>Name: {strSport}</Card.Title>
                    <Button onClick ={()=>showTeamDetails(idTeam)}  variant="primary"><FontAwesomeIcon icon={faArrowRight} /> explore</Button>
                    <Card.Text style={{textAlign:'justify'}} >
                        {strDescriptionEN}
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </div>
        
        
    );
};

export default Team;