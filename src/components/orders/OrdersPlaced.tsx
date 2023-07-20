import axios from 'axios';

// export const site = 'http://localhost:3001';
export const site = 'https://mun-chai-backend.onrender.com/';

const endpoints = {
  placed: `${site}/api/v2/placed`,
  accepted: `${site}/api/v2/accepted`,
  delivered: `${site}/api/v2/delivered`,
  rejected: `${site}/api/v2/rejected`,
  refunded: `${site}/api/v2/refunded`,
};

// Helper function to fetch data from an endpoint
function fetchData(endpoint: string) {
  return axios
    .get(endpoint)
    .then((response) => response.data)
    .catch((error) => {
      console.error('An error occurred:', error);
      return null;
    });
}

// Fetch data from all endpoints using Promise.all()
function fetchDataFromAllEndpoints() {
  const requests = Object.values(endpoints).map(fetchData);

  return Promise.all(requests)
    .then(
      ([
        placedData,
        acceptedData,
        deliveredData,
        rejectedData,
        refundedData,
      ]) => {
        // Store the data in an object
        const exportedData = {
          placed: placedData,
          accepted: acceptedData,
          delivered: deliveredData,
          rejected: rejectedData,
          refunded: refundedData,
        };

        // Perform any further actions or exports with the data here
        return exportedData; // Exporting the data
      }
    )
    .catch((error) => {
      console.error('An error occurred:', error);
      return null;
    });
}

// Export the fetchDataFromAllEndpoints function so you can use it in other files
export { fetchDataFromAllEndpoints };
// console.log(fetchDataFromAllEndpoints)
