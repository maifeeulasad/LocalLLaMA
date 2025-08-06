import React, { lazy, Suspense } from 'react';

const Page1mifpr3 = lazy(() => import('./Page'));

const LazyPage1mifpr3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mifpr3 />
  </Suspense>
);

export { LazyPage1mifpr3 };
