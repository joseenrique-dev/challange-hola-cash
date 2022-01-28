import { useEffect } from 'react';
import './App.css';
import digitalServices from './service/digitalServices';

const App = () => {
  // const [digitalSercicesData, setDigitalSercicesData] = useState([]);
  useEffect(() => {
    digitalServices().then((data) => {
      console.log(data);
      // setDigitalSercicesData(data.digitalServices.digital_services);
    });
  }, []);

  return (
    <div className='container'>
      <h1>Digital Services</h1>
    </div>
  );
};

export default App;
