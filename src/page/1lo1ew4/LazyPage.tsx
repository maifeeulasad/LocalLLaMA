import React, { lazy, Suspense } from 'react';

const Page1lo1ew4 = lazy(() => import('./Page'));

const LazyPage1lo1ew4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lo1ew4 />
  </Suspense>
);

export { LazyPage1lo1ew4 };
