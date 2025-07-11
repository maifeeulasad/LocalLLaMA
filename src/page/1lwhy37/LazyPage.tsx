import React, { lazy, Suspense } from 'react';

const Page1lwhy37 = lazy(() => import('./Page'));

const LazyPage1lwhy37 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwhy37 />
  </Suspense>
);

export { LazyPage1lwhy37 };
