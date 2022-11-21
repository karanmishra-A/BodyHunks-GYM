import React from 'react'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png';
import './Plans.css'

const plans = () => {
  return (
    <div className='plans-container'>
      <div className='blur plans-blur1'></div>
      <div className='blur plans-blur2'></div>
      <div className='programs-header'>
        <h3 className='stroke-text'>READY TO START YOUR JOURNEY WITH US</h3>
      </div>

      <div className='plans'>
        {plansData.map((plan,i) =>(
            <div className='plan' key={i}>
                {plan.icon}
                <span>{plan.name} </span>
                <span>$ {plan.price}</span>
                <div className='features'>
                    {plan.features.map((feature, i) => (
                        <div className='feature'>
                            <img src={whiteTick} alt=" "/>
                            <span key={i}>{feature}</span>
                        </div>
                    ))}
                </div>
                <button className='btn'>Join Now</button>
            </div>
        ))}
      </div>
    </div>
  );
};

export default plans
