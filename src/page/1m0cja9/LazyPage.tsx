import React, { lazy, Suspense } from 'react';

const Page1m0cja9 = lazy(() => import('./Page'));

const LazyPage1m0cja9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0cja9 />
  </Suspense>
);

export { LazyPage1m0cja9 };
