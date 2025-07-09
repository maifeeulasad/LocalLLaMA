import React, { lazy, Suspense } from 'react';

const Page1luvt31 = lazy(() => import('./Page'));

const LazyPage1luvt31 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luvt31 />
  </Suspense>
);

export { LazyPage1luvt31 };
