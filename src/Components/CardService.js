import React from 'react';

export const CardService = ({ service }) => {
  const { data } = service;

  return (
    <div className='card-element'>
      <img src={data.service_group_avatar} alt='' />
      <span className='service-description'>{data.service_group_name}</span>
    </div>
  );
};

export default React.memo(CardService);
