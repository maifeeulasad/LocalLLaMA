import React, { lazy, Suspense } from 'react';

const Page1ma7oyv = lazy(() => import('./Page'));

const LazyPage1ma7oyv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ma7oyv />
  </Suspense>
);

export { LazyPage1ma7oyv };
