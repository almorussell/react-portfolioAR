import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// Import Swiper styles
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Current Projects</h2>

         <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        
        autoplay={{
        delay: 1000, // time between slides (ms)
        disableOnInteraction: false, // keeps autoplay after user swipes
      }}
      loop={true}

        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
          <SwiperSlide className="project-card">
            <img src="https://storage.noirlab.edu/media/archives/images/screen/noao0107a.jpg" alt="Astrology"/>
            <h3>Astrology App</h3>
            <p>MERN stack astrology app.</p>
            <a href="#" className="btn">Check It Out</a>
          </SwiperSlide>

          <SwiperSlide className="project-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGPGQozVB0n51q1yBrfT611Sy_Y4yRTxPrew&s" alt="Yoga"/>
            <h3>Yoga App</h3>
            <p>Yoga API app.</p>
            <a href="#" className="btn">Check It Out</a>
          </SwiperSlide>

          <SwiperSlide className="project-card">
            <img src="https://www.thefloralsociety.com/cdn/shop/articles/FloralSociety_2021_1130_631_1.jpg?v=1709664168" alt="Ikebana Image"/>
            <h3>Floral Arragement Application</h3>
            <p>Real-time flower-matching using a Floral API and React.</p>
            <a href="#" className="btn">Check It Out</a>
          </SwiperSlide>

        </Swiper>

      </div>
    </section>
  );
};

export default Projects;