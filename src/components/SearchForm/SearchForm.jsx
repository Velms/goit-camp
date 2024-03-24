import { useState } from 'react';
import sprite from '../../images/sprite.svg';
import {
  Form,
  LocationLabel,
  Text,
  FilterLabel,
  Wrap,
  WrapContent,
  Filterbutton,
  SearchButton,
} from './SearchForm.styled';

const SearchForm = ({ handleSearch, filters: initialFilters }) => {
  const [filters, setFilters] = useState({
    location: '',
    equipment: [],
    type: '',
    ...initialFilters,
  });

  const [showSuggestions, setShowSuggestions] = useState(false);
  const [validLocation, setValidLocation] = useState(true);

  const availableLocations = [
    // {
    //   value: '',
    //   text: '',
    // },
    'Kyiv',
    'Lviv',
    'Odesa',
    'Poltava',
    'Dnipro',
    'Kharkiv',
    'Sumy',
  ];

  const filtersVehicleEquipment = [
    {
      value: 'airConditioner',
      icon: 'icon-AC',
      text: 'AC',
    },
    {
      value: 'transmission',
      icon: 'icon-automatic',
      text: 'Automatic',
    },
    {
      value: 'kitchen',
      icon: 'icon-kitchen',
      text: 'Kitchen',
    },
    {
      value: 'tv',
      icon: 'icon-TV',
      text: 'TV',
    },
    {
      value: 'shower',
      icon: 'icon-shower',
      text: 'Shower/WC',
    },
  ];

  const filtersType = [
    {
      value: 'van',
      icon: 'icon-van',
      text: 'Van',
    },
    {
      value: 'fullyIntegrated',
      icon: 'icon-fully-integrated',
      text: 'Fully Integrated',
    },
    {
      value: 'alcove',
      icon: 'icon-alcove',
      text: 'Alcove',
    },
  ];

  const handleFiltersChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));

    if (filterType === 'location') {
      const matchedSuggestions = availableLocations.filter(city =>
        city.startsWith(value.toLowerCase())
      );
      setShowSuggestions(true);

      if (matchedSuggestions.length === 0) {
        setValidLocation(false);
      } else {
        setValidLocation(true);
      }
    }
  };

  const handleCheckboxChange = event => {
    const { value, checked } = event.target;
    let updatedEquipment = [...filters.equipment];

    if (checked) {
      updatedEquipment = [...updatedEquipment, value];
    } else {
      updatedEquipment = updatedEquipment.filter(item => item !== value);
    }
    setFilters(prev => ({ ...prev, equipment: updatedEquipment }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!availableLocations.includes(filters.location)) {
      setValidLocation(false);
      return;
    }

    handleSearch(filters);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <LocationLabel>
        Location
        <svg>
          <use href={`${sprite}#icon-map-pin`} />
        </svg>
        <input
          type="text"
          placeholder="City"
          value={filters.location}
          onChange={e => handleFiltersChange('location', e.target.value)}
          onBlur={() => setShowSuggestions(false)}
          required
        />
        {showSuggestions && !validLocation && (
          <span>
            Please, enter a valid location: {availableLocations.join(', ')}.
          </span>
        )}
      </LocationLabel>

      <Text>Filters</Text>

      <FilterLabel>
        Vehicle equipment
        <hr />
        <Wrap>
          {filtersVehicleEquipment.map(({ value, icon, text }) => (
            <WrapContent key={value}>
              <input
                type="checkbox"
                name="equipment"
                value={value}
                checked={filters.equipment.includes(value)}
                onChange={handleCheckboxChange}
              />
              <Filterbutton>
                <svg width="32" height="32" fill="none" stroke="currentColor">
                  <use href={`${sprite}#${icon}`} />
                </svg>
                {text}
              </Filterbutton>
            </WrapContent>
          ))}
        </Wrap>
      </FilterLabel>

      <FilterLabel>
        Vehicle type
        <hr />
        <Wrap>
          {filtersType.map(({ value, icon, text }) => (
            <WrapContent key={value}>
              <input
                type="radio"
                name="vehicleType"
                value={value}
                checked={filters.type === value}
                onChange={e => handleFiltersChange('type', e.target.value)}
              />
              <Filterbutton>
                <svg width="40" height="28" fill="none" stroke="currentColor">
                  <use href={`${sprite}#${icon}`} />
                </svg>
                {text}
              </Filterbutton>
            </WrapContent>
          ))}
        </Wrap>
      </FilterLabel>
      <SearchButton type="submit">Search</SearchButton>
    </Form>
  );
};

export default SearchForm;
