import React, { lazy, Suspense } from 'react';

const Page1mfxjd5 = lazy(() => import('./Page'));

const LazyPage1mfxjd5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfxjd5 />
  </Suspense>
);

export { LazyPage1mfxjd5 };
