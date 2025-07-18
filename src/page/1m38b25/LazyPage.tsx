import React, { lazy, Suspense } from 'react';

const Page1m38b25 = lazy(() => import('./Page'));

const LazyPage1m38b25 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m38b25 />
  </Suspense>
);

export { LazyPage1m38b25 };
