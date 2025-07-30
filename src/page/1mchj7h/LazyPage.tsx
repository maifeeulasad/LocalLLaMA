import React, { lazy, Suspense } from 'react';

const Page1mchj7h = lazy(() => import('./Page'));

const LazyPage1mchj7h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mchj7h />
  </Suspense>
);

export { LazyPage1mchj7h };
