import React, { lazy, Suspense } from 'react';

const Page1mdishv = lazy(() => import('./Page'));

const LazyPage1mdishv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdishv />
  </Suspense>
);

export { LazyPage1mdishv };
