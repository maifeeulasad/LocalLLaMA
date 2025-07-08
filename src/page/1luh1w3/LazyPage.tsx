import React, { lazy, Suspense } from 'react';

const Page1luh1w3 = lazy(() => import('./Page'));

const LazyPage1luh1w3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luh1w3 />
  </Suspense>
);

export { LazyPage1luh1w3 };
