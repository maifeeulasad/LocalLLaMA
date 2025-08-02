import React, { lazy, Suspense } from 'react';

const Page1mfb2ed = lazy(() => import('./Page'));

const LazyPage1mfb2ed = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfb2ed />
  </Suspense>
);

export { LazyPage1mfb2ed };
