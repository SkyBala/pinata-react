import React, { useState }  from 'react'
import {Box} from "@mui/material"
import Bimg from "./img/Bimg.png"
import styles from "./BasketPage.module.css"
import Button from "@mui/material/Button"
import { types } from '../../redux/types'
import { useDispatch, useSelector } from "react-redux"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import BusketModal from './busketModal/BusketModal';


function BasketPage() {


  const count = useSelector(state => state.busketReducer.count)
  const dispatch = useDispatch();

  const [modal,setModal] = useState(false)



const BusketInc =() => {
dispatch({
  type:types.BUSKET_INC
})
}

const BusketDec =() => {
  dispatch({
    type:types.BUSKET_DEC
    })
}

// for aut

const defaultProps = {
  options: top100Films,
  getOptionLabel: (option) => option.title,
};


  return (
    <Box sx={{
      backgroundColor:"#F6F0F0",
     height:"100vh",
     width:"100vw",
    }}>
      <Box sx={{
        display:'flex',
        justifyContent:"space-between",
        paddingLeft: '80px',
        paddingRight: '85px',
        paddingTop:"50px",
        position:"relative",
      }}>
      {/* mainfoto */}
      <Box 
      sx ={{
        display:"flex",
        flexDirection:"column",
      }}>
          <Box sx={{
            width: '555px',
            height: '620px',
          }}>
            <img src={Bimg} alt=""/>
          </Box>
          <Box 
          sx={{
            display:"flex",
            flexDirection:"row",
            width: '555px',
            justifyContent:"space-between",
            paddingTop:"15px",
          }}>
            <div className={styles.BusketFourBlock}></div>
            <div className={styles.BusketFourBlock} ></div>
            <div className={styles.BusketFourBlock}></div>
            <div className={styles.BusketFourBlock}></div>
          </Box>
        </Box>
        {/* end Main Foto */}
        
        <Box
        sx={{
          width:"100%",
          display:"flex",
          flexDirection:"column",
          justifyContent:"space-around",
          paddingLeft:"140px"
          

        }}>
          <Box sx = {{
            display:"flex",
            flexDirection:"column",
          
          }}>
            <span className={styles.topDouble}>
              <p  className={styles.BusketText}>Pothos Collection</p>
              <p className={styles.BusketText}>$150 </p>
            </span>
              <span className={styles.BusketTxt}>
              Fun and lively collection of three trailing pothos plants in clay pots
              </span>
           
          </Box>
          <center>
      <Box 
      sx= {{
        height:"2px",
        background:"darkGreen",
        width:"525px",
        borderRadius:"5%",
      }}>
        
      </Box>
      </center>
        {/* Circles */}
          <Box 
          sx = {{
           display:"flex",
           flexDirection:"row",
           alignItems:"center",
           width:"260px",
           justifyContent:"space-around",
          
          }}>
            <span className={styles.BusketTxt}>
              Choose color 
            </span>
            <Box sx= {{
              width: "110px",
              display:"flex",
              justifyContent:"space-around",
              alignContent:"center",
             
            }}>
              <button  className={styles.TripleButton}>
                
              </button>
              <button className={styles.TripleButton}>
                
              </button>
              <button  className={styles.TripleButton}>
               
              </button>
            </Box>
          </Box>
      
      <Box sx= {{
           display: "flex",
         
          
        
      }}>
            <Box sx={{
              width:"140px",
              height: "44px",
              borderRadius:"30px",
              border:"1px solid black",
              display:"flex",
              flexDirection:"row",
              justifyContent:"space-between",
              marginRight:"29px",
              alignItems:"center",
              "& button":{
                height:"42px",
                width:"50px",
                border:"none",
                backgroundColor:"#F6F0F0",
              },
            
            }}>
                <button
                  style={{
                    borderTopLeftRadius:"30px",
                    borderBottomLeftRadius:"30px",
                  
                   } }
                  onClick = {BusketDec}
                  variant="text" color="success" >-</button>
                <h1 className={styles.BusketTxt}>{count}</h1>
                    
                <button 
                  variant="text"   color="success"
                  style ={{
                    borderTopRightRadius:'30px',
                    borderBottomRightRadius:'30px',
                    
                  }}
                  onClick = {BusketInc}>+</button>
            </Box>
                    <Button variant="contained"  color="success"
                    sx ={{
                      background:"#0C3010",
                      borderRadius: "30px",
                      width: '313px',
                      height: '44px',
                    }}className={styles.BusketTxt} 
                    onClick={() => {setModal(true)}}>ADD TO CARD</Button>
      
      </Box>
   
      <center>
      <Box 
      sx= {{
        height:"2px",
        background:"darkGreen",
        width:"525px",
        borderRadius:"5%",
      }}>
        
      </Box>
      </center>

      <Box sx = {{
        width: '300px',
        color:"#0C3010",
        "& Autocomplate":{
          backgroundColor:"darkGreen",
        },
      }}>
      
         <Autocomplete
        {...defaultProps}
        id="disable-close-on-select"
        disableCloseOnSelect
        renderInput={(params) => (
          <TextField
            {...params}
            label="Details and Care "
            variant="standard"
          />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="disable-close-on-select"
        disableCloseOnSelect
        renderInput={(params) => (
          <TextField
            {...params}
            label="Description "
            variant="standard"
          />
        )}
      />
     
      </Box>
      
      <Box sx= {{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        
        textAlign:"center",
      }}>
        <Box 
        sx={{
          width:"207px"
        }}>
            <span className={styles.BusketBottomTxt}> Express Shipping </span>
            <p className={styles.BusketTxt}>
            Express Shipping Available
            Learn More
            </p>
        </Box>
          <Box sx ={{
            width:"0.5px",
            height:"95px",
            background:"darkGreen",
          }}>

          </Box>
        <Box
        sx={{
          width:"207px"
        }}>
        <span className={styles.BusketBottomTxt}>Guarantee</span>
            <p className ={styles.BusketTxt}>
            If your plant dies within 30 days, 
            we’ll replace it for free.   
            Learn More</p>
          </Box>
      </Box>
    </Box>
  </Box>   
      <center>
      <Box 
      sx= {{
        margin:"50px",
        height:"2px",
        background:"darkGreen",
        width:"1200px",
        borderRadius:"5%",
      }}>
        
      </Box>
      </center>
      
      {modal && <Box
      sx ={{
        position:"absolute",
        top:"0%",left:'66.7%',
        overflow:"hidden",
      }} >
      <BusketModal closeModal = {setModal}/>
      </Box>}


  </Box>
  )
}

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  {
    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  {
    title: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];
export default BasketPage;