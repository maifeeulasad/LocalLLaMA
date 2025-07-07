import React, { lazy, Suspense } from 'react';

const Page1lto3t9 = lazy(() => import('./Page'));

const LazyPage1lto3t9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lto3t9 />
  </Suspense>
);

export { LazyPage1lto3t9 };
