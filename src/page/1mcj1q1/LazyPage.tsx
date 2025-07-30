import React, { lazy, Suspense } from 'react';

const Page1mcj1q1 = lazy(() => import('./Page'));

const LazyPage1mcj1q1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcj1q1 />
  </Suspense>
);

export { LazyPage1mcj1q1 };
