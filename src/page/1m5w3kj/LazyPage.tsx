import React, { lazy, Suspense } from 'react';

const Page1m5w3kj = lazy(() => import('./Page'));

const LazyPage1m5w3kj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5w3kj />
  </Suspense>
);

export { LazyPage1m5w3kj };
