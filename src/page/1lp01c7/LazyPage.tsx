import React, { lazy, Suspense } from 'react';

const Page1lp01c7 = lazy(() => import('./Page'));

const LazyPage1lp01c7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lp01c7 />
  </Suspense>
);

export { LazyPage1lp01c7 };
