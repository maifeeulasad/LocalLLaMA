import React, { lazy, Suspense } from 'react';

const Page1m3y0m8 = lazy(() => import('./Page'));

const LazyPage1m3y0m8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3y0m8 />
  </Suspense>
);

export { LazyPage1m3y0m8 };
