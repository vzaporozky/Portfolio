import React, {useState, useEffect, useRef} from "react";
import {Link} from 'react-router-dom';
import classes from './LinkToApp.module.css';
import HeroSlider, {Slide} from "hero-slider";

const LinkToApp = (props) => {
    const [items, setItems] = useState(false);
    const [timerId, setTimerId] = useState(null);

    const handleMouseEnter = () => {
        setItems(true)
    };

    const handleMouseLeave = () => {
        setItems(false);
    };

    return(
        <div to={props.to} className={classes.app} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div><img src={props.src} alt="" /></div>
                <div className={classes.text}>
                    <h3>Color Game</h3>
                    {props.table === '2' && 
                        <div className={classes.list}>
                            <ul>
                                {props.firstTable.map((el, i) => <li key={i} ><span>{el}</span></li>)}
                            </ul>
                            <ul>
                                {props.secondTable.map((el, i) => <li key={i} ><span>{el}</span></li>)}
                            </ul>
                        </div>
                    }
                    {props.table === '1' && 
                        <div className={classes.list}>
                            <ul>
                                {props.firstTable.map((el, i) => <li key={i} ><span>{el}</span></li>)}
                            </ul>
                        </div>
                    }
                </div>
            {!props.toolTip && items && 
                <div className={classes.tooltip +' '+ classes.tooltip_right}> 
                {/* onMouseEnter={tooltipEnter} onMouseLeave={tooltipLeave} */}
                    <p style={{color:'#c0c0c0'}}>wait for it. |p.s. don't use buttons|</p>
                    <div className={classes.tooltip_images}>
                            <HeroSlider
                                height={"200px"}
                                autoplay={true}
                                orientation='horizontal'
                                shouldDisplayButtons={false}
                                controller={{
                                    initialSlide: 2,
                                    slidingDuration: 500,
                                    slidingDelay: 0,
                                    shouldAutoplay: true,
                                    shouldDisplayButtons: false,
                                    autoplayDuration: 200
                                }}
                            >
                            <Slide background={{
                                backgroundImageSrc: props.img1,
                                // backgroundAttachment: 'fixed'
                            }} />
                            <Slide background={{
                                backgroundImageSrc: props.img2,
                                backgroundAttachment: 'fixed'
                            }} />
                            <Slide background={{
                                backgroundImageSrc: props.img3,
                                backgroundAttachment: 'fixed'
                            }} />
                        </HeroSlider>
                    </div>
                    <div style={{marginTop:'200px'}}>In this game you can find right color. If color is't corect, this color will hide, and you will be looking for corect color</div>
                    <div>This game is needed to pass the time.</div>
                </div>}
            {props.toolTip && items && 
                <div className={classes.tooltip +' '+ classes.tooltip_left} style={{left:'-333px'}}>
                    <div className={classes.tooltip_images}>
                            <HeroSlider
                                height={"200px"}
                                autoplay={true}
                                orientation='horizontal'
                                shouldDisplayButtons={false}
                                controller={{
                                    initialSlide: 2,
                                    slidingDuration: 500,
                                    slidingDelay: 0,
                                    shouldAutoplay: true,
                                    shouldDisplayButtons: false,
                                    autoplayDuration: 200
                                }}
                            >
                            <Slide background={{
                                backgroundImageSrc: props.img1,
                                // backgroundAttachment: 'fixed'
                            }} />
                            <Slide background={{
                                backgroundImageSrc: props.img2,
                                backgroundAttachment: 'fixed'
                            }} />
                            <Slide background={{
                                backgroundImageSrc: props.img3,
                                backgroundAttachment: 'fixed'
                            }} />
                        </HeroSlider>
                    </div>
                    <div style={{marginTop:'200px'}}>In this game you can find right color. If color is't corect, this color will hide, and you will be looking for corect color</div>
                    <div>This game is needed to pass the time.</div>
                </div>}
        </div>
    )
}

export default LinkToApp;