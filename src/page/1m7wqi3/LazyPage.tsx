import React, { lazy, Suspense } from 'react';

const Page1m7wqi3 = lazy(() => import('./Page'));

const LazyPage1m7wqi3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7wqi3 />
  </Suspense>
);

export { LazyPage1m7wqi3 };
