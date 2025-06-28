import React, { lazy, Suspense } from 'react';

const Page1cf7hg0 = lazy(() => import('./Page'));

const LazyPage1cf7hg0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1cf7hg0 />
  </Suspense>
);

export { LazyPage1cf7hg0 };
