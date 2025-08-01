import React, { lazy, Suspense } from 'react';

const Page1me713k = lazy(() => import('./Page'));

const LazyPage1me713k = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me713k />
  </Suspense>
);

export { LazyPage1me713k };
