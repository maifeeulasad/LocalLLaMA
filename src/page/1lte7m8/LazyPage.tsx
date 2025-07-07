import React, { lazy, Suspense } from 'react';

const Page1lte7m8 = lazy(() => import('./Page'));

const LazyPage1lte7m8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lte7m8 />
  </Suspense>
);

export { LazyPage1lte7m8 };
