import React, { lazy, Suspense } from 'react';

const Page1mcl15k = lazy(() => import('./Page'));

const LazyPage1mcl15k = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcl15k />
  </Suspense>
);

export { LazyPage1mcl15k };
