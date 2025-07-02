import React, { lazy, Suspense } from 'react';

const Page1lp5pt0 = lazy(() => import('./Page'));

const LazyPage1lp5pt0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lp5pt0 />
  </Suspense>
);

export { LazyPage1lp5pt0 };
