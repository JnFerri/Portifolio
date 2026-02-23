import React, { useEffect, useState } from 'react';
import './PolaroidAnimationImages.css';
import imagem1 from '../../../Assets/Images/minha_imagem1.png';
import imagem2 from '../../../Assets/Images/minha_imagem2.png';
import imagem3 from '../../../Assets/Images/minha_imagem3.png';
import Delay from '../../../Utils/Delay';
const PolaroiAnimationImages = (props) => {
  const {isVisible} = props;
  
  const [photos, setPhotos] = useState([
    { id: 1, isActive: true , image: imagem1 },
    { id: 2, isActive: false, image: imagem2 },
    { id: 3, isActive: false, image: imagem3 }
  ]);
  const handlePhotoClick = async () => {
    setPhotos(prevPhotos => {
      const newPhotos = [...prevPhotos];
      // Move a primeira foto para o final
      const firstPhoto = newPhotos.shift();
      newPhotos.push(firstPhoto);
      // Atualiza o estado ativo
      return newPhotos.map((photo, index) => ({
        ...photo,
        isActive: index === 0
      }));
    });
  };

  useEffect(() => {
    async function changePhotoAuto(){
      await Delay(5000)
      handlePhotoClick()
      return
    }
    changePhotoAuto()
  },[photos])

  return (
    <div class={` w-[90%] h-full   ${isVisible ? 'animate-fade-in' : null}`}> 
<div className="polaroid-container"  >
  {photos.map((photo, index) => (
    <div
      key={photo.id}
      
      className={`polaroid-photo ${photo.isActive ? 'active' : ''} h-full w-full  `}
      style={{ zIndex: photos.length - index }}
      onClick={photo.isActive ? handlePhotoClick : undefined}
    >
      <div className="polaroid-image" class='flex items-center justify-around h-[98%] w-[100%]'>
        <div className="image-placeholder">
          <img src={photo.image} class='w-full h-[98%] object-cover ' alt='Minha foto em uma moldura polaroid.'/>
        </div>
      </div>
      <div className="polaroid-label" class='h-[5%] '>
      </div>
    </div>
  ))}
</div>

    </div>
);
};

export default PolaroiAnimationImages