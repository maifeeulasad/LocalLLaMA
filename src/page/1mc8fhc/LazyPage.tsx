import React, { lazy, Suspense } from 'react';

const Page1mc8fhc = lazy(() => import('./Page'));

const LazyPage1mc8fhc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mc8fhc />
  </Suspense>
);

export { LazyPage1mc8fhc };
