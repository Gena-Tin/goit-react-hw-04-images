import { useEffect, useState } from 'react';
import css from './App.module.css';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGallery/ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import fetchImages from './Services/apiPixaby';

export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [targetImage, setTargetImage] = useState(null);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    setIsLoading(true);

    fetchImages(searchQuery, page)
      .then(data => {
        if (data.hits.length === 0) {
          setLoadMore(false);
          setIsLoading(false);
        } else {
          setLoadMore(true);
        }
        if (page === 1) {
          setImages(data.hits);
        } else {
          setImages(() => [...images, ...data.hits]);
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      })
      .catch(error => {
        console.log('catch = ' + error);
      })
      .finally(() => setIsLoading(false));
      
  }, [searchQuery, page]);

  useEffect(() => {
    setImages([]);
    setPage(1);
  }, [searchQuery]);

  const loadMoreHandler = () => {
    setPage(page + 1);
  };

  const formSubmitHandler = searchQuery => {
    setSearchQuery(searchQuery);
  };

  const toggleModal = ({ status, src, alt }) => {
    if (status) {
      setTargetImage({ src, alt });
      setShowModal(true);
    } else {
      setTargetImage(null);
      setShowModal(false);
    }
  };

  return (
    <div className={css.app}>
      <Searchbar onSubmit={formSubmitHandler} />
      {images.length > 0 && (
        <ImageGallery toggleModal={toggleModal}>
          <ImageGalleryItem images={images} />
        </ImageGallery>
      )}
      {showModal && (
        <Modal
          src={targetImage.src}
          alt={targetImage.alt}
          toggleModal={toggleModal}
        />
      )}
      {isLoading && <Loader />}
      {loadMore && <Button onClick={loadMoreHandler} massage={'Load more'} />}
    </div>
  );
}
