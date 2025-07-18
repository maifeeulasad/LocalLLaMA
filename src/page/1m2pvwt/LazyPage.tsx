import React, { lazy, Suspense } from 'react';

const Page1m2pvwt = lazy(() => import('./Page'));

const LazyPage1m2pvwt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2pvwt />
  </Suspense>
);

export { LazyPage1m2pvwt };
