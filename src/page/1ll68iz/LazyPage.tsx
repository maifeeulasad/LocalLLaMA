import React, { lazy, Suspense } from 'react';

const Page1ll68iz = lazy(() => import('./Page'));

const LazyPage1ll68iz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ll68iz />
  </Suspense>
);

export { LazyPage1ll68iz };
