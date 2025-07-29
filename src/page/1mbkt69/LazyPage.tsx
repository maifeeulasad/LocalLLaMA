import React, { lazy, Suspense } from 'react';

const Page1mbkt69 = lazy(() => import('./Page'));

const LazyPage1mbkt69 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbkt69 />
  </Suspense>
);

export { LazyPage1mbkt69 };
