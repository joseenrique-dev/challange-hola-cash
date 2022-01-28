import React from 'react';

export const CardProvider = ({ ...props }) => {
  const { provider_avatar, provider_name, cashback_percentage } = props;

  return (
    <div className='container-provider'>
      <img src={provider_avatar} alt='' />
      <div className='provider-description-card'>
        <div>{provider_name}</div>
        <div className='provider-cash-back'>
          {cashback_percentage} % CashBack
        </div>
      </div>
    </div>
  );
};

export default React.memo(CardProvider);
