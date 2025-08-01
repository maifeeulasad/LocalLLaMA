import React, { lazy, Suspense } from 'react';

const Page1mequp1 = lazy(() => import('./Page'));

const LazyPage1mequp1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mequp1 />
  </Suspense>
);

export { LazyPage1mequp1 };
