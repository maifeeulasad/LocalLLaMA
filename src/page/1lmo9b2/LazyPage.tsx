import React, { lazy, Suspense } from 'react';

const Page1lmo9b2 = lazy(() => import('./Page'));

const LazyPage1lmo9b2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmo9b2 />
  </Suspense>
);

export { LazyPage1lmo9b2 };
