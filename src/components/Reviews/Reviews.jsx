import React from 'react';

const Reviews = ({ advert }) => {
  return (
    <div>
      Reviews
      {/*<ul>
        {advert.reviews.map(review => (
          <li key={review._id}>
            <p>{review.text}</p>
            <p>
              <strong>{review.author}</strong> - {review.rating} stars
            </p>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Reviews;
