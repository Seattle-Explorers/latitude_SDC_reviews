import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = { discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'constant-arrival-rate',
      rate: 1000,
      duration: '1m',
      preAllocatedVUs: 50,
      maxVUs: 100,
    }
  }
};

export default function() {
  const baseURL = 'http://localhost:3002/api/reviews/';

  const randomPaddedID = Math.floor(Math.random() * (10000000 - 9000000) + 9000000).toString().padStart(8, '0');
  const randomEndPoint = http.get(`http://localhost:3002/api/reviews/${randomPaddedID}`);

  check(randomEndPoint, {
    '200 status': r => r.status === 200,
  })
};

