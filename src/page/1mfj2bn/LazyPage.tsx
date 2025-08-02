import React, { lazy, Suspense } from 'react';

const Page1mfj2bn = lazy(() => import('./Page'));

const LazyPage1mfj2bn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfj2bn />
  </Suspense>
);

export { LazyPage1mfj2bn };
