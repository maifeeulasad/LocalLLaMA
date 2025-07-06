import React, { lazy, Suspense } from 'react';

const Page1lrzom4 = lazy(() => import('./Page'));

const LazyPage1lrzom4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrzom4 />
  </Suspense>
);

export { LazyPage1lrzom4 };
