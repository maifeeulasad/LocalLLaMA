import React, { lazy, Suspense } from 'react';

const Page1mi5er2 = lazy(() => import('./Page'));

const LazyPage1mi5er2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi5er2 />
  </Suspense>
);

export { LazyPage1mi5er2 };
