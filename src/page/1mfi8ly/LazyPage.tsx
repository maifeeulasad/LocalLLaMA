import React, { lazy, Suspense } from 'react';

const Page1mfi8ly = lazy(() => import('./Page'));

const LazyPage1mfi8ly = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfi8ly />
  </Suspense>
);

export { LazyPage1mfi8ly };
