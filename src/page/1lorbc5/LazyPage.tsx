import React, { lazy, Suspense } from 'react';

const Page1lorbc5 = lazy(() => import('./Page'));

const LazyPage1lorbc5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lorbc5 />
  </Suspense>
);

export { LazyPage1lorbc5 };
