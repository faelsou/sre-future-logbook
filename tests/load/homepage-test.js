
import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 },   // Ramp up to 20 users
    { duration: '1m', target: 20 },    // Stay at 20 users for 1 minute
    { duration: '20s', target: 0 },    // Ramp down to 0 users
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests must complete below 500ms
    http_req_failed: ['rate<0.01'],   // Less than 1% of requests can fail
  },
};

export default function() {
  const baseUrl = __ENV.BASE_URL || 'https://diario-sre.example.com';
  
  // Homepage test
  const homepageResponse = http.get(`${baseUrl}/`);
  check(homepageResponse, {
    'homepage status is 200': (r) => r.status === 200,
    'homepage loads in less than 500ms': (r) => r.timings.duration < 500,
    'homepage has expected title': (r) => r.body.includes('Diário de um SRE'),
  });
  
  sleep(1);
  
  // Iniciante page test
  const inicianteResponse = http.get(`${baseUrl}/iniciante`);
  check(inicianteResponse, {
    'iniciante status is 200': (r) => r.status === 200,
    'iniciante loads in less than 500ms': (r) => r.timings.duration < 500,
  });
  
  sleep(1);
  
  // Project detail page test
  const projectResponse = http.get(`${baseUrl}/projeto/iniciante/project-1`);
  check(projectResponse, {
    'project detail status is 200': (r) => r.status === 200,
    'project detail loads in less than 700ms': (r) => r.timings.duration < 700,
  });
  
  sleep(1);
}
