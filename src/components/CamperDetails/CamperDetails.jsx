import { useState } from 'react';
import sprite from '../../images/sprite.svg';
import {
  AdvertsWrap,
  Description,
  ImgList,
  MainWrap,
  Price,
  RatingWrap,
  Tabs,
  TabButton,
  Title,
  TabsContent,
} from './CamperDetails.styled';
import Features from 'components/Features/Features';
import Reviews from 'components/Reviews/Reviews';

const CamperDetails = ({ advert }) => {
  const [activeTab, setActiveTab] = useState('');

  return (
    <AdvertsWrap>
      <Title>{advert.name}</Title>

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

      <Price>€{advert.price.toFixed(2)}</Price>

      <MainWrap>
        <ImgList>
          {advert.gallery.length > 0 &&
            advert.gallery.map(link => (
              <li key={link}>
                <img src={link} alt={advert.name} />
              </li>
            ))}
        </ImgList>

        <Description>{advert.description}</Description>
      </MainWrap>

      <Tabs>
        <TabButton
          type="button"
          onClick={() => setActiveTab('features')}
          className={activeTab === 'features' ? 'active' : ''}
        >
          Features
        </TabButton>
        <TabButton
          type="button"
          onClick={() => setActiveTab('reviews')}
          className={activeTab === 'reviews' ? 'active' : ''}
        >
          Reviews
        </TabButton>
        <hr />
      </Tabs>

      {activeTab === 'features' && (
        <TabsContent>
          <Features advert={advert} />
          <Reviews advert={advert} />
        </TabsContent>
      )}
      {activeTab === 'reviews' && (
        <TabsContent>
          <Features advert={advert} />
          <Reviews advert={advert} />
        </TabsContent>
      )}
      {/* {activeTab === 'features' ? <Features /> : <Reviews />} */}
    </AdvertsWrap>
  );
};

export default CamperDetails;
