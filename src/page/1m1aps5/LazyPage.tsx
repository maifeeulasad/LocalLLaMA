import React, { lazy, Suspense } from 'react';

const Page1m1aps5 = lazy(() => import('./Page'));

const LazyPage1m1aps5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m1aps5 />
  </Suspense>
);

export { LazyPage1m1aps5 };
