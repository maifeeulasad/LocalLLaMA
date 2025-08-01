import React, { lazy, Suspense } from 'react';

const Page1mekoy8 = lazy(() => import('./Page'));

const LazyPage1mekoy8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mekoy8 />
  </Suspense>
);

export { LazyPage1mekoy8 };
