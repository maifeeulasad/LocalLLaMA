import React, { lazy, Suspense } from 'react';

const Page1m45po2 = lazy(() => import('./Page'));

const LazyPage1m45po2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m45po2 />
  </Suspense>
);

export { LazyPage1m45po2 };
