import React, { lazy, Suspense } from 'react';

const Page1lt9ot6 = lazy(() => import('./Page'));

const LazyPage1lt9ot6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lt9ot6 />
  </Suspense>
);

export { LazyPage1lt9ot6 };
