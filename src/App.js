import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './App.css';
import CardService from './Components/CardService';
import ServiceProvider from './Components/ServiceProvider';
import { getDigitalServices } from './Redux/actions/service.actions';

const App = () => {
  const [selectedProvider, setSelectedProvider] = useState([]);
  const dispatch = useDispatch();
  const servicesDate = useSelector((store) => store.serviceReducer.data);

  useEffect(() => {
    // console.log(servicesDate?.digitalServices?.digital_services);
    dispatch(getDigitalServices());
  }, [dispatch, servicesDate]);

  const handleSelectDataProvider = (providers) => {
    setSelectedProvider(providers);
  };

  return (
    <div className='App'>
      <div>
        <div className='container'>
          <div className='title'>Digital Services</div>
          <div className='card-container'>
            {/* DIGITAL SERVICES SECTION */}
            {servicesDate?.digitalServices?.digital_services.length > 0 &&
              servicesDate?.digitalServices?.digital_services.map((data) => {
                return (
                  <div
                    key={data.service_group_id}
                    onClick={() => handleSelectDataProvider(data.providers)}
                  >
                    <CardService service={{ data }} />
                  </div>
                );
              })}
          </div>
          <hr />
          {/* CARD PROVIDERS SECTIONS */}
          <div>
            <ServiceProvider providers={selectedProvider} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(App);
