import React, { lazy, Suspense } from 'react';

const Page1lu8bw3 = lazy(() => import('./Page'));

const LazyPage1lu8bw3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lu8bw3 />
  </Suspense>
);

export { LazyPage1lu8bw3 };
