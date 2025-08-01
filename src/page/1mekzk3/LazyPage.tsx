import React, { lazy, Suspense } from 'react';

const Page1mekzk3 = lazy(() => import('./Page'));

const LazyPage1mekzk3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mekzk3 />
  </Suspense>
);

export { LazyPage1mekzk3 };
