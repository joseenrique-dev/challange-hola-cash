import React from 'react';

export const CardService = ({ service }) => {
  debugger;
  const { data } = service;
  console.log('Show names:', data);
  return (
    <div>
      <h1>{data.service_group_avatar}</h1>
    </div>
  );
};

export default React.memo(CardService);
