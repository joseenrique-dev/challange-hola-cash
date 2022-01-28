import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './App.css';
import CardService from './Components/CardService';
import { getDigitalServices } from './Redux/actions/service.actions';

const App = () => {
  const dispatch = useDispatch();
  const servicesDate = useSelector((store) => store.serviceReducer.data);

  useEffect(() => {
    console.log(servicesDate?.digitalServices?.digital_services);
    dispatch(getDigitalServices());
  }, [dispatch, servicesDate]);

  return (
    <div className='App'>
      <div>
        <div className='container'>
          <div className='title'>Digital Services</div>
          <div className='card-container'>
            {/* <h1>Digital Services</h1> */}
            {servicesDate?.digitalServices?.digital_services.length > 0 &&
              servicesDate?.digitalServices?.digital_services.map((data) => {
                return (
                  <div key={data.service_group_id}>
                    <CardService service={{ data }} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(App);
