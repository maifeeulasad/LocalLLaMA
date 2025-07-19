import React, { lazy, Suspense } from 'react';

const Page1m3ct76 = lazy(() => import('./Page'));

const LazyPage1m3ct76 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3ct76 />
  </Suspense>
);

export { LazyPage1m3ct76 };
