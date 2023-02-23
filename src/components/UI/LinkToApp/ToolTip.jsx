import React from "react";
import HeroSlider, {Slide} from "hero-slider";
import classes from './LinkToApp.module.css';

const ToolTip = (props) => {
    return(
        <div 
            className={classes.tooltip +' '+ (props.toolTip ? classes.tooltip_left :classes.tooltip_right)} 
            style={props.toolTip ? { left: '-333px' } : {right: '-333px'}}> 
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
                    {props.description.map(el => (
                            <div key={Math.random()}>{el}</div>
                        )
                    )}
                </div>
    )
}

export default ToolTip;