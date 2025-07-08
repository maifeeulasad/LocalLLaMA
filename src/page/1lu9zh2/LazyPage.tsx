import React, { lazy, Suspense } from 'react';

const Page1lu9zh2 = lazy(() => import('./Page'));

const LazyPage1lu9zh2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lu9zh2 />
  </Suspense>
);

export { LazyPage1lu9zh2 };
