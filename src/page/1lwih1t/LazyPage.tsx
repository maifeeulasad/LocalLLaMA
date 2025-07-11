import React, { lazy, Suspense } from 'react';

const Page1lwih1t = lazy(() => import('./Page'));

const LazyPage1lwih1t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwih1t />
  </Suspense>
);

export { LazyPage1lwih1t };
