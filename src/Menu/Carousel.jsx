import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from './Imagenes/image 1.png'; // Importar la imagen
import img2 from './Imagenes/image 2.png';
import img3 from './Imagenes/image 3.png';
import img4 from './Imagenes/image 4.png';
import img5 from './Imagenes/image 9.png';
import img6 from './Imagenes/image 10.png';



const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: '0', // Eliminar el padding central
  };

  return (
    <Slider {...settings}>
      <div>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <img
            src={img1} // Usar la imagen importada
            alt="Slide 1"
            style={{ width: '100%', height: '100%' }}
          />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
            <h2 style={{ fontSize: '3em' }}>MAXFOLKLORE</h2>
            <p style={{ fontSize: '1.8em' }}>Antioquia, tierra de paisajes impresionantes, tradiciones arraigadas y una historia rica y diversa, es un tesoro cultural que merece ser explorado y celebrado. Desde las imponentes montañas de la región Andina hasta las coloridas calles de sus pueblos coloniales, Antioquia ofrece una experiencia cultural única que cautiva a quienes la visitan.</p>
          </div>
        </div>
      </div>   

      <div>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <img
            src={img2} // Usar la imagen importada
            alt="Slide 1"
            style={{ width: '100%', height: '100%' }}
          />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
            <p style={{ fontSize: '1.8em' }}>¿Sabías que en Antioquia se encuentra el famoso Peñol de Guatapé? Esta enorme formación rocosa tiene una escalera de 740 escalones que conduce a la cima, desde donde se puede disfrutar de una vista panorámica impresionante de los alrededores, incluyendo el embalse de Guatapé..</p>
          </div>
        </div>
      </div>  

      <div>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <img
            src={img3} // Usar la imagen importada
            alt="Slide 1"
            style={{ width: '100%', height: '100%' }}
          />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
            <p style={{ fontSize: '1.8em' }}>¿Sabías que Antioquia es el hogar del tradicional "carriel"? Este es un tipo de bolso de cuero que era utilizado por los campesinos antioqueños para llevar sus pertenencias. Hoy en día, el carriel se considera un símbolo de la identidad antioqueña y es un objeto de orgullo cultural en la región.</p>
          </div>
        </div>
      </div>  

      <div>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <img
            src={img4} // Usar la imagen importada
            alt="Slide 1"
            style={{ width: '100%', height: '100%' }}
          />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
            <p style={{ fontSize: '1.8em' }}>¿Sabías que en Antioquia se encuentra el pueblo de Santa Fe de Antioquia, conocido por sus hermosas iglesias coloniales? Esta encantadora ciudad, declarada Patrimonio Histórico y Cultural de la Humanidad por la UNESCO, es un destino turístico popular que ofrece una mirada fascinante a la historia y la arquitectura colonial de la región.</p>
          </div>
        </div>
      </div>  

      <div>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <img
            src={img5} // Usar la imagen importada
            alt="Slide 1"
            style={{ width: '100%', height: '100%' }}
          />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
            <p style={{ fontSize: '1.8em' }}>¿Sabías que en Antioquia se celebra el Festival de la Trova? Este evento reúne a trovadores y poetas de toda la región para competir en improvisaciones poéticas y musicales, preservando así la tradición oral y la poesía popular antioqueña..</p>
          </div>
        </div>
      </div> 

            <div>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <img
            src={img6} // Usar la imagen importada
            alt="Slide 1"
            style={{ width: '100%', height: '100%' }}
          />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
            <p style={{ fontSize: '1.8em' }}>¿Sabías que Antioquia es conocida por su arquitectura en bahareque? El bahareque es una técnica de construcción tradicional que utiliza caña, barro y madera, y se puede ver en muchas de las casas y edificios históricos de la región</p>
          </div>
        </div>
      </div>  
    </Slider>
  );
};

export default Carousel;
