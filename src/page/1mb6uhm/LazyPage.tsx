import React, { lazy, Suspense } from 'react';

const Page1mb6uhm = lazy(() => import('./Page'));

const LazyPage1mb6uhm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mb6uhm />
  </Suspense>
);

export { LazyPage1mb6uhm };
