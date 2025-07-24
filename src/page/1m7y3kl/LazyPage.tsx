import React, { lazy, Suspense } from 'react';

const Page1m7y3kl = lazy(() => import('./Page'));

const LazyPage1m7y3kl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7y3kl />
  </Suspense>
);

export { LazyPage1m7y3kl };
