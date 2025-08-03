import React, { lazy, Suspense } from 'react';

const Page1mfxas1 = lazy(() => import('./Page'));

const LazyPage1mfxas1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfxas1 />
  </Suspense>
);

export { LazyPage1mfxas1 };
