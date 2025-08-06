import React, { lazy, Suspense } from 'react';

const Page1miew86 = lazy(() => import('./Page'));

const LazyPage1miew86 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miew86 />
  </Suspense>
);

export { LazyPage1miew86 };
