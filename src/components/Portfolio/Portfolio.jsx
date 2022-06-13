import React, {useContext} from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import first from '../../img/first.PNG';
import Netflix from '../../img/netflix.PNG';
import Restaurant from '../../img/restaurant.PNG';
import Travel from '../../img/travel.PNG';
import 'swiper/css'
import { themeContex, themeContext } from '../../Context';

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
   <div className="portfolio" id='Portfolio' style={{color: darkMode? 'var(--orange)':''}}>

    {/* heading */}
    <span style={{color: darkMode? 'white':''}}>Recent Projects</span>
    <span>Portfolio</span>

    {/* slider */}
    <Swiper
    spaceBetween={40}
    slidesPerView={3}
    grabCursor={true}
    className='portfolio-slider'
    >
        <SwiperSlide>
            <img src={first} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Netflix} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Restaurant} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Travel} alt="" />
        </SwiperSlide>


    </Swiper>
   </div>
  )
}

export default Portfolio