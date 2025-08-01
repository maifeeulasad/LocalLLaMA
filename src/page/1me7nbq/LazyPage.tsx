import React, { lazy, Suspense } from 'react';

const Page1me7nbq = lazy(() => import('./Page'));

const LazyPage1me7nbq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me7nbq />
  </Suspense>
);

export { LazyPage1me7nbq };
