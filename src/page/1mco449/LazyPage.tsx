import React, { lazy, Suspense } from 'react';

const Page1mco449 = lazy(() => import('./Page'));

const LazyPage1mco449 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mco449 />
  </Suspense>
);

export { LazyPage1mco449 };
