import React, { lazy, Suspense } from 'react';

const Page1m86wxa = lazy(() => import('./Page'));

const LazyPage1m86wxa = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m86wxa />
  </Suspense>
);

export { LazyPage1m86wxa };
