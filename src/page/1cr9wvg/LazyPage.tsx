import React, { lazy, Suspense } from 'react';

const Page1cr9wvg = lazy(() => import('./Page'));

const LazyPage1cr9wvg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1cr9wvg />
  </Suspense>
);

export { LazyPage1cr9wvg };
