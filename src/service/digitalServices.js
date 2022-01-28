const data = require('../BE/digital-services.json');

export default function getDigitalServices(success = true) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (success) {
        resolve(data);
      }
    }, Math.random() * 1000);
  });
}
