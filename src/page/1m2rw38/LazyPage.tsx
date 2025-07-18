import React, { lazy, Suspense } from 'react';

const Page1m2rw38 = lazy(() => import('./Page'));

const LazyPage1m2rw38 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2rw38 />
  </Suspense>
);

export { LazyPage1m2rw38 };
