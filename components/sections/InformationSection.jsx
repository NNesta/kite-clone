import React from 'react';
import Wrapper from '../ui/Wrapper';
import Card1 from '../ui/Card1';

const InformationSection = () => {
  return (
    <Wrapper>
        <div className='grid md:grid-cols-3 gap-8'>
           {
            [
               { image:'https://www.kit.edu/img/Corona-KeyVisual_MaskeAbstand_quadrat.jpg',
                title:'FAQ on the Coronavirus',
                description:'Updated questions and answers relating to the Coronavirus. Last Update: Positive Test / Masks (As of December 1, 2022)',},
               { image:'https://www.kit.edu/img/Corona-KeyVisual_MaskeAbstand_quadrat.jpg',
                title:'FAQ on the Coronavirus',
                description:'Updated questions and answers relating to the Coronavirus. Last Update: Positive Test / Masks (As of December 1, 2022)',},
               { image:'https://www.kit.edu/img/Corona-KeyVisual_MaskeAbstand_quadrat.jpg',
                title:'FAQ on the Coronavirus',
                description:'Updated questions and answers relating to the Coronavirus. Last Update: Positive Test / Masks (As of December 1, 2022)',},
            ].map((item,index)=><Card1 key={index} {...item}/>)
           }
        </div>
    </Wrapper>
  )
}

export default InformationSection