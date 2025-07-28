import React, { lazy, Suspense } from 'react';

const Page1may4ut = lazy(() => import('./Page'));

const LazyPage1may4ut = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1may4ut />
  </Suspense>
);

export { LazyPage1may4ut };
