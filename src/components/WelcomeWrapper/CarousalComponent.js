import React from 'react'
import { SliderData } from './SliderData';
import Carousel from 'react-material-ui-carousel'
import LinearProgress from '@material-ui/core/LinearProgress';
import './CarousalComponent.css'
import "animate.css"

const CarousalComponent = () => {
    const [progress, setProgress] = React.useState(0);
    const [indexN, setindexN] = React.useState(1);
    const [indexP, setindexP] = React.useState(SliderData.length-1);
    const [presentImage, setpresentImage] = React.useState(0);

    const startAnimation = () => {
        console.log('n/p');
    };

    const nextIndex = () => {
        setindexN((oldIndex)=>{
            if(oldIndex===SliderData.length-1){
                return 0;
            }else{
                return oldIndex+1;
            }
        })
    }   
    
    const prevIndex = () => {
        setindexP((oldIndex)=>{
            if(oldIndex===0){
                return SliderData.length-1;
            }else{
                return oldIndex-1;
            }
        })
    }   

    React.useEffect(() => {
        const buttonN = document.querySelector('.myButtonN')
        const buttonP = document.querySelector('.myButtonP')
        const rigthButtonDiv = document.querySelector('.rigthButtonDiv')
        const rightButtonDivTitle = document.querySelector('.rightButtonDivTitle')
        const leftButtonDiv = document.querySelector('.leftButtonDiv')
        buttonN.addEventListener('mouseenter', () => {
            console.log('g');
            rigthButtonDiv.style.transform='translateX(-25vh)';
            rightButtonDivTitle.style.transform='translate(0,4.5vh)';
            rightButtonDivTitle.style.visibility='visible';
        });
        buttonP.addEventListener('mouseenter', () => {
            console.log('g');
            leftButtonDiv.style.transform='translateX(+25vh)';
        });
        rigthButtonDiv.addEventListener('mouseleave', () => {
            rightButtonDivTitle.style.visibility='hidden';
            rigthButtonDiv.style.transform='translateX(0)';
            rightButtonDivTitle.style.transform='translate(0,0)';
        });
        leftButtonDiv.addEventListener('mouseleave', () => {
            leftButtonDiv.style.transform='translateX(0)';
        });
      }, [])
    

    React.useEffect(() => {
        const timer = setInterval(() => {
            
          setProgress((oldProgress) => {
            if (oldProgress === 100) {
              return 0;
            }
            const diff =  4;
            return oldProgress+diff;
          });
        }, 200);
    
        return () => {
          clearInterval(timer);
        };
      }, []);


    function Item(props)
    {
        return (
            <img className='carousal_image' src={props.item.image} alt="" />
        )
    }
    // console.log(index);
    return (
        <div className='carousal_compo'>

        {/* ---------------------------------------------Animation  of Carousal----------------------------------- */}

            <div className="rightButtonDivTitle"></div>
            <div className='rigthButtonDiv' style={{backgroundImage:`url(${SliderData[indexN].image})`}}></div>

            <div className='leftButtonDiv' style={{backgroundImage:`url(${SliderData[indexP].image})`}}></div>

            <div className="carousal_thumbnail">
                {
                    SliderData.map( (item, i) => <img src={item.image} key={i} alt="" /> )
                }
            </div>

            <div className='carousal_box1'></div>

            <div className='carousal_box2'>
                <div className='carousal_box2_child'></div>
            </div>

            <div className='carousal_box3'>
                <div className='carousal_box3_child'></div>
            </div>

            <div className='carousal_head'><span>We Build Your Dream</span></div>
            <div className='carousal_text'><span>It is a long established fact that a reader will be distracted by the readable content.</span></div>
            
            <div className='carousal_button'><button>More About</button></div>
            
            <div className='carousal_verticalBlocks1'></div>
            <div className='carousal_verticalBlocks2'></div>
            <div className='carousal_verticalBlocks3'></div>
            <div className='carousal_verticalBlocks4'></div>

        {/* ---------------------------------------------Animation  of Carousal Ends----------------------------------- */}


        {/* ---------------------------------------------Body  of Carousal----------------------------------- */}

            <Carousel
                next={ () => {
                    setProgress(0);
                    startAnimation();
                    nextIndex();
                } }
                prev={ () => {
                    setProgress(0)
                    startAnimation();
                    prevIndex();
                } }
                NextIcon={<button className='myButton myButtonN'>{'>'}</button>}
                PrevIcon={<button className='myButton myButtonP'> {'<'} </button>}
                indicators={false}
                autoPlay={false}
                interval='5000'
                animation='slide'
                stopAutoPlayOnHover={false}
                navButtonsAlwaysVisible={true}
                navButtonsProps={{          
                    style: {
                        backgroundColor: 'black',
                        borderRadius: 0,
                        margin:0,
                        padding:0,
                        opacity:0.3,
                    }
                }} 
                navButtonsWrapperProps={{
                    style: {
                        bottom: 20,
                        top: 0,
                        margin:0,
                        padding:0
                    }
                }}                              
            >
                {
                    SliderData.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>

        {/* ---------------------------------------------Body  of Carousal Ends----------------------------------- */}


        {/* ---------------------------------------------Progress Bar----------------------------------- */}

            
            <LinearProgress className='progressBar' variant="determinate" value={progress} />

        {/* ---------------------------------------------Progress Bar Ends----------------------------------- */}

        </div>
    )
}

export default CarousalComponent;
