import React, { lazy, Suspense } from 'react';

const Page1m2c9w6 = lazy(() => import('./Page'));

const LazyPage1m2c9w6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2c9w6 />
  </Suspense>
);

export { LazyPage1m2c9w6 };
