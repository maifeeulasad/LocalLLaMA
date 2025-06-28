import React, { lazy, Suspense } from 'react';

const Page1llhdoq = lazy(() => import('./Page'));

const LazyPage1llhdoq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1llhdoq />
  </Suspense>
);

export { LazyPage1llhdoq };
