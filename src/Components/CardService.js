import React from 'react';

export const CardService = ({ service }) => {
  debugger;
  const { data } = service;
  console.log('Show names:', data);
  return (
    <div className='card-element'>
      <img src={data.service_group_avatar} alt='' />
      <span className='service-description'>{data.service_group_name}</span>
    </div>
  );
};

export default React.memo(CardService);
