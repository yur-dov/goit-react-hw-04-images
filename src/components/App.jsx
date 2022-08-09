import Searchbar from './SearchBar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery'
import css from './app.module.css'
import Loader from './Loader/Loader'
import Button from './Button/Button'
import Modal from './Modal/Modal'
import { useEffect, useState } from "react";
import fetchImageApi from './services/images-api'

const App=() => {
  const [name, setName] = useState('');
  const [largeImageURL, setLargeImageURL] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(0);
  
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!name) {
      return;
    };
    setLoading(true);
    fetchImageApi(name, page)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw Error('There is no image');
      })
      .then(response => {
        setImages(prevState => [...prevState, ...response.hits]);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, [name, page]);  
 


const handleImgClick = largeImageUrl => {
  setLargeImageURL(largeImageUrl)
  toggleModal()
}

const showImage = (name) => {
  setName(name);
  setImages([]);
  setPage(1);
}
  
const loadMore = () => {
  setPage(page + 1);
}

const toggleModal = () => {
  setShowModal(!showModal);
};  

return (
  <div className={css.divBox}>
    <Searchbar showImage={showImage} />

    {images.length !== 0 &&
      <ImageGallery 
        images={images} 
        onImgClick={handleImgClick} />}

    {loading &&
      <Loader />}

    {images.length >= 12 &&
      <Button onClick={loadMore}/>} 

    {showModal &&
      <Modal
        onCloseModal={toggleModal}
        largeImageURL={largeImageURL}
      />}
    
</div>
);
};

export default App