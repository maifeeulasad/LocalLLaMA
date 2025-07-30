import React, { lazy, Suspense } from 'react';

const Page1mcoce7 = lazy(() => import('./Page'));

const LazyPage1mcoce7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcoce7 />
  </Suspense>
);

export { LazyPage1mcoce7 };
