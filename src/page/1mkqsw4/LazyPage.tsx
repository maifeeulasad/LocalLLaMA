import React, { lazy, Suspense } from 'react';

const Page1mkqsw4 = lazy(() => import('./Page'));

const LazyPage1mkqsw4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkqsw4 />
  </Suspense>
);

export { LazyPage1mkqsw4 };
