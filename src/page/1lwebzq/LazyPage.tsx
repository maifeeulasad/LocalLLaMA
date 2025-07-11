import React, { lazy, Suspense } from 'react';

const Page1lwebzq = lazy(() => import('./Page'));

const LazyPage1lwebzq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwebzq />
  </Suspense>
);

export { LazyPage1lwebzq };
