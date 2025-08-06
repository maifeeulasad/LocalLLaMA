import React, { lazy, Suspense } from 'react';

const Page1mioswc = lazy(() => import('./Page'));

const LazyPage1mioswc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mioswc />
  </Suspense>
);

export { LazyPage1mioswc };
