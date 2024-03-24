import sprite from '../../images/sprite.svg';
import {
  CategoriesItem,
  CategoriesList,
  Container,
  DetailsList,
  Title,
} from './Features.styled';

const Features = ({ advert }) => {
  const {
    airConditioner,
    kitchen,
    beds,
    TV,
    CD,
    radio,
    shower,
    toilet,
    freezer,
    hob,
    microwave,
    gas,
    water,
  } = advert.details;

  return (
    <Container>
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

        {airConditioner >= 1 && (
          <CategoriesItem>
            <svg width="20" height="20" fill="none">
              <use href={`${sprite}#icon-AC`} />
            </svg>
            AC
          </CategoriesItem>
        )}

        <CategoriesItem style={{ textTransform: 'capitalize' }}>
          <svg width="20" height="20">
            <use href={`${sprite}#icon-petrol`} />
          </svg>
          {advert.engine}
        </CategoriesItem>

        {kitchen >= 1 && (
          <CategoriesItem>
            <svg width="20" height="20" fill="none" stroke="currentColor">
              <use href={`${sprite}#icon-kitchen`} />
            </svg>
            kitchen
          </CategoriesItem>
        )}

        <CategoriesItem>
          <svg width="20" height="20" fill="none" stroke="currentColor">
            <use href={`${sprite}#icon-beds`} />
          </svg>
          {beds} beds
        </CategoriesItem>

        {airConditioner >= 1 && (
          <CategoriesItem>
            <svg width="20" height="20" fill="none" stroke="currentColor">
              <use href={`${sprite}#icon-air-conditioner`} />
            </svg>
            {airConditioner} air conditioner
          </CategoriesItem>
        )}

        {CD >= 1 && (
          <CategoriesItem>
            <svg width="20" height="20" fill="none" stroke="currentColor">
              <use href={`${sprite}#icon-cd`} />
            </svg>
            CD
          </CategoriesItem>
        )}

        {radio >= 1 && (
          <CategoriesItem>
            <svg width="20" height="20" fill="none" stroke="currentColor">
              <use href={`${sprite}#icon-radio`} />
            </svg>
            Radio
          </CategoriesItem>
        )}

        {TV >= 1 && (
          <CategoriesItem>
            <svg width="20" height="20" fill="none" stroke="currentColor">
              <use href={`${sprite}#icon-TV`} />
            </svg>
            TV
          </CategoriesItem>
        )}

        {hob >= 1 && (
          <CategoriesItem>
            <svg width="20" height="20" fill="none" stroke="currentColor">
              <use href={`${sprite}#icon-hob`} />
            </svg>
            {hob} hob
          </CategoriesItem>
        )}

        {microwave >= 1 && (
          <CategoriesItem>
            <svg width="20" height="20" fill="none" stroke="currentColor">
              <use href={`${sprite}#icon-microwave`} />
            </svg>
            Microwave
          </CategoriesItem>
        )}

        {freezer >= 1 && (
          <CategoriesItem>
            <svg width="20" height="20" fill="none" stroke="currentColor">
              <use href={`${sprite}#icon-freezer`} />
            </svg>
            Freezer
          </CategoriesItem>
        )}

        {shower >= 1 && (
          <CategoriesItem>
            <svg width="20" height="20" fill="none" stroke="currentColor">
              <use href={`${sprite}#icon-shower`} />
            </svg>
            Shower
          </CategoriesItem>
        )}

        {toilet >= 1 && (
          <CategoriesItem>
            <svg width="20" height="20">
              <use href={`${sprite}#icon-toilet`} />
            </svg>
            Toilet
          </CategoriesItem>
        )}

        {gas && gas.trim() !== '' && (
          <CategoriesItem>
            <svg width="20" height="20">
              <use href={`${sprite}#icon-gas`} />
            </svg>
            {gas.replace(/^(\d+\.?\d*)([a-zA-Z]*)$/, '$1 $2')} Gas
          </CategoriesItem>
        )}

        {water && water.trim() !== '' && (
          <CategoriesItem>
            <svg width="20" height="20" fill="none" stroke="currentColor">
              <use href={`${sprite}#icon-water`} />
            </svg>
            {water.replace(/^(\d+\.?\d*)([a-zA-Z]*)$/, '$1 $2')} Water
          </CategoriesItem>
        )}
      </CategoriesList>

      <Title>Vehicle details</Title>

      <hr />

      <div>
        <DetailsList>
          <li>Form</li>
          <li>
            {advert.form
              .replace(/([a-z])([A-Z])/g, '$1 $2')
              .charAt(0)
              .toUpperCase() +
              advert.form
                .replace(/([a-z])([A-Z])/g, '$1 $2')
                .slice(1)
                .toLowerCase()}
          </li>
        </DetailsList>
        <DetailsList>
          <li>Length</li>
          <li>{advert.length.replace(/^(\d+\.?\d*)([a-zA-Z]*)$/, '$1 $2')}</li>
        </DetailsList>
        <DetailsList>
          <li>Width</li>
          <li>{advert.width.replace(/^(\d+\.?\d*)([a-zA-Z]*)$/, '$1 $2')}</li>
        </DetailsList>
        <DetailsList>
          <li>Height</li>
          <li>{advert.height.replace(/^(\d+\.?\d*)([a-zA-Z]*)$/, '$1 $2')}</li>
        </DetailsList>
        <DetailsList>
          <li>Tank</li>
          <li>{advert.tank.replace(/^(\d+\.?\d*)([a-zA-Z]*)$/, '$1 $2')}</li>
        </DetailsList>
        <DetailsList>
          <li>Consumption</li>
          <li>
            {advert.consumption.replace(/(\d+\.?\d*)([a-zA-Z/]*$)/, '$1 $2')}
          </li>
        </DetailsList>
      </div>
    </Container>
  );
};

export default Features;
