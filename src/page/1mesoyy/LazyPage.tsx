import React, { lazy, Suspense } from 'react';

const Page1mesoyy = lazy(() => import('./Page'));

const LazyPage1mesoyy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mesoyy />
  </Suspense>
);

export { LazyPage1mesoyy };
