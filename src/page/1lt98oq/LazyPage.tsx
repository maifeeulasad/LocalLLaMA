import React, { lazy, Suspense } from 'react';

const Page1lt98oq = lazy(() => import('./Page'));

const LazyPage1lt98oq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lt98oq />
  </Suspense>
);

export { LazyPage1lt98oq };
