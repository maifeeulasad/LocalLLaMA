import React, { lazy, Suspense } from 'react';

const Page1m4ke3x = lazy(() => import('./Page'));

const LazyPage1m4ke3x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4ke3x />
  </Suspense>
);

export { LazyPage1m4ke3x };
