import React, { lazy, Suspense } from 'react';

const Page1m8zeg8 = lazy(() => import('./Page'));

const LazyPage1m8zeg8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8zeg8 />
  </Suspense>
);

export { LazyPage1m8zeg8 };
