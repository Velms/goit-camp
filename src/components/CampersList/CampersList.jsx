import { useState } from 'react';
import sprite from '../../images/sprite.svg';

import Modal from 'components/Modal/Modal';
import CamperDetails from 'components/CamperDetails/CamperDetails';
import {
  AdvertsWrap,
  Button,
  CategoriesItem,
  CategoriesList,
  Description,
  Img,
  Price,
  PriceWrap,
  RatingWrap,
  Title,
  TitleWrap,
} from './CampersList.styled';

const CampersList = ({ advert }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Img src={advert.gallery[0]} alt={advert.name} />
      <AdvertsWrap>
        <TitleWrap>
          <Title>{advert.name}</Title>
          <PriceWrap>
            <Price>€{advert.price.toFixed(2)}</Price>
            <svg width="24" height="24" fill="none" stroke="currentColor">
              <use href={`${sprite}#icon-heart`} />
            </svg>
          </PriceWrap>
        </TitleWrap>

        <RatingWrap>
          <p style={{ textDecorationLine: 'underline' }}>
            <svg width="16" height="16" fill="none" stroke="currentColor">
              <use href={`${sprite}#icon-star`} />
            </svg>
            {advert.rating} ({advert.reviews.length} Reviews)
          </p>

          <p>
            <svg width="16" height="16" fill="none" stroke="currentColor">
              <use href={`${sprite}#icon-map-pin`} />
            </svg>
            {advert.location.split(',').reverse().join(', ')}
          </p>
        </RatingWrap>

        <Description>{advert.description}</Description>

        <CategoriesList>
          <CategoriesItem>
            <svg width="20" height="20">
              <use href={`${sprite}#icon-adults`} />
            </svg>
            {advert.adults} adults
          </CategoriesItem>

          <CategoriesItem style={{ textTransform: 'capitalize' }}>
            <svg width="20" height="20" fill="none" stroke="currentColor">
              <use href={`${sprite}#icon-automatic`} />
            </svg>
            {advert.transmission}
          </CategoriesItem>

          <CategoriesItem style={{ textTransform: 'capitalize' }}>
            <svg width="20" height="20">
              <use href={`${sprite}#icon-petrol`} />
            </svg>
            {advert.engine}
          </CategoriesItem>

          {advert.details.kitchen >= 1 && (
            <CategoriesItem>
              <svg width="20" height="20" fill="none" stroke="currentColor">
                <use href={`${sprite}#icon-kitchen`} />
              </svg>
              Kitchen
            </CategoriesItem>
          )}

          <CategoriesItem>
            <svg width="20" height="20" fill="none" stroke="currentColor">
              <use href={`${sprite}#icon-beds`} />
            </svg>
            {advert.details.beds} beds
          </CategoriesItem>

          {advert.details.airConditioner >= 1 && (
            <CategoriesItem>
              <svg width="20" height="20" fill="none">
                <use href={`${sprite}#icon-AC`} />
              </svg>
              AC
            </CategoriesItem>
          )}
        </CategoriesList>

        <Button onClick={openModal}>Show more</Button>
      </AdvertsWrap>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <CamperDetails advert={advert} />
        </Modal>
      )}
    </>
  );
};

export default CampersList;
