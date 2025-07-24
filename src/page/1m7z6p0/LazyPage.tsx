import React, { lazy, Suspense } from 'react';

const Page1m7z6p0 = lazy(() => import('./Page'));

const LazyPage1m7z6p0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7z6p0 />
  </Suspense>
);

export { LazyPage1m7z6p0 };
