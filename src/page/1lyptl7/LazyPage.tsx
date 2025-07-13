import React, { lazy, Suspense } from 'react';

const Page1lyptl7 = lazy(() => import('./Page'));

const LazyPage1lyptl7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyptl7 />
  </Suspense>
);

export { LazyPage1lyptl7 };
