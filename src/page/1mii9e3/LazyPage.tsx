import React, { lazy, Suspense } from 'react';

const Page1mii9e3 = lazy(() => import('./Page'));

const LazyPage1mii9e3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mii9e3 />
  </Suspense>
);

export { LazyPage1mii9e3 };
