

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));




export default function OutreachesDisplay() {
  const [outreachData, setOutreachData] = useState([]);
  const classes = useStyles();


  let getOutreachData  = ()=>{

    axios.get("http://localhost:8080/api/compassion/outreaches/")
    .then(({data})=>{
        //console.log(data)

    setOutreachData([...data])
    })
  }



  return (
    <div className={classes.root}>


      <button onClick={getOutreachData}>
            Get Data
      </button>
     
     {<div> 
         {outreachData.map((outreach, idx)=>{
             console.log(outreach)
             return(
                <div>
        <Accordion key={idx}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{outreach.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Total cost: {outreach.total_cost}
          </Typography>
        </AccordionDetails>
      </Accordion>
                </div>
             )
         })} </div>}

<Fab color="primary" aria-label="add">
      <AddIcon />
      </Fab>
    </div>
  );
}
