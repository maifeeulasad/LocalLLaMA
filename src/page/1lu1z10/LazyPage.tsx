import React, { lazy, Suspense } from 'react';

const Page1lu1z10 = lazy(() => import('./Page'));

const LazyPage1lu1z10 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lu1z10 />
  </Suspense>
);

export { LazyPage1lu1z10 };
