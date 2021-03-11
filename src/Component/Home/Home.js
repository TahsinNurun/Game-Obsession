import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import Image from 'react-bootstrap/Image'



const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    },[])
    return (
        <div  className = "container">
             <div  style= {{backgroundImage:'url(https://www.thesportsdb.com/images/media/league/fanart/xpwsrw1421853005.jpg)',height:'15rem',backgroundRepeat:'no-repeat', width:'100%'}}>
                 <br/> 
                 <br/> 
                 <h1 className ="align-middle" style= {{textAlign:'center',color:'white'}}>GAME OBSESSION</h1>
             </div>
             <div >
                {
                    teams.map(team =><Team team ={team}></Team>)
                }
            </div>
        </div>
           
        
    );
};

export default Home;