import React, { useState, useEffect } from 'react';
import './Carousel3DProjects.css';

const Carousel3DProjects = (props) => {
  const {images , isVisible} = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Efeito para avançar automaticamente o carrossel (opcional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 500);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 500);
  };

  // Função para calcular a posição e estilo de cada slide
  const getSlideStyle = (index) => {
    const totalSlides = images.length;
    const position = (index - currentIndex + totalSlides) % totalSlides;
    
    let style = {
      transform: 'translateX(0) scale(1)',
      opacity: 1,
      zIndex: 1
    };
    
    // Slide atual (centro)
    if (position === 0) {
      style = {
        transform: 'translateX(0) scale(1)',
        opacity: 1,
        zIndex: 5,
        filter: 'brightness(1)'
      };
    }
    // Slide anterior (esquerda)
    else if (position === totalSlides - 1) {
      style = {
        transform: 'translateX(-80%) scale(0.8)',
        opacity: 0.7,
        zIndex: 3,
        filter: 'brightness(0.7)'
      };
    }
    // Próximo slide (direita)
    else if (position === 1) {
      style = {
        transform: 'translateX(80%) scale(0.8)',
        opacity: 0.7,
        zIndex: 3,
        filter: 'brightness(0.7)'
      };
    }
    // Slides mais distantes
    else {
      style = {
        transform: `translateX(${position > totalSlides/2 ? '-' : ''}120%) scale(0.6)`,
        opacity: 0.3,
        zIndex: 1,
        filter: 'brightness(0.4)'
      };
    }
    
    // Adiciona classe de animação se estiver animando
    if (isAnimating && (position === 0 || position === 1 || position === totalSlides - 1)) {
      style.transition = 'all 0.5s ease-in-out';
    }
    
    return style;
  };

  return (
    <div className="carousel-3d-container" class = {`w-full h-4/5 ${isVisible ?  'animate-slide-up' : null}`}>
      <div className="carousel-3d-wrapper">
        <div className="carousel-3d-track" >
          {images.map((image, index) => (
            <div 
              key={index}
              className={`carousel-3d-slide ${index === currentIndex ? 'active' : ''}`}
              style={getSlideStyle(index)}
              // Removido o onClick do slide para evitar mudança ao clicar na imagem
            >
              <div className="slide-image-container" >
                <img src={image.src} alt={image.title} />
                <div className="slide-overlay"></div>
              </div>
              <div className="slide-content">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className={`carousel-3d-btn prev ${isAnimating ? 'disabled' : ''}`} 
          onClick={handlePrev}
          disabled={isAnimating}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#2C2320" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button 
          className={`carousel-3d-btn next ${isAnimating ? 'disabled' : ''}`} 
          onClick={handleNext}
          disabled={isAnimating}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="#2C2320" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      <div className="carousel-3d-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''} ${isAnimating ? 'disabled' : ''}`}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel3DProjects;