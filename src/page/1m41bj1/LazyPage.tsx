import React, { lazy, Suspense } from 'react';

const Page1m41bj1 = lazy(() => import('./Page'));

const LazyPage1m41bj1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m41bj1 />
  </Suspense>
);

export { LazyPage1m41bj1 };
