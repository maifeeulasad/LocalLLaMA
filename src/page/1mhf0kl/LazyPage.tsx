import React, { lazy, Suspense } from 'react';

const Page1mhf0kl = lazy(() => import('./Page'));

const LazyPage1mhf0kl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhf0kl />
  </Suspense>
);

export { LazyPage1mhf0kl };
