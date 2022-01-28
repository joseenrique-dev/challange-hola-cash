import React from 'react';
import CardProvider from './CardProvider';

export const ServiceProvider = ({ providers }) => {
  console.log('Data providers-->', providers);
  return (
    <div>
      <div className='service-provider-title'>Providers</div>
      {providers.length > 0 &&
        providers.map((prov) => (
          <div key={prov.provider_id} className='service-provider-wrap'>
            <CardProvider {...prov} />
          </div>
        ))}
    </div>
  );
};

export default ServiceProvider;
