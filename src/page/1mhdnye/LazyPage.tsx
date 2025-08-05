import React, { lazy, Suspense } from 'react';

const Page1mhdnye = lazy(() => import('./Page'));

const LazyPage1mhdnye = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhdnye />
  </Suspense>
);

export { LazyPage1mhdnye };
