import React, { lazy, Suspense } from 'react';

const Page1mkan6d = lazy(() => import('./Page'));

const LazyPage1mkan6d = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkan6d />
  </Suspense>
);

export { LazyPage1mkan6d };
