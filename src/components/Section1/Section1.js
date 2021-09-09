import React from 'react'
import './Section1.css'
import Section1Card from './Section1Card'

function Section1() {
    return (
        <div className='section1'>
            {/* <div className="section1_one col-lg-3 col-md-4 col-sm-6 m-b30">1</div>
            <div className="section1_two col-lg-3 col-md-4 col-sm-6 m-b30">2</div>
            <div className="section1_three col-lg-3 col-md-4 col-sm-6 m-b30">3</div>
            <div className="section1_three col-lg-3 col-md-4 col-sm-6 m-b30">4</div> */}
            <Section1Card/>
            <Section1Card/>
            <Section1Card/>
            <Section1Card/>
        </div>
    )
}

export default Section1
