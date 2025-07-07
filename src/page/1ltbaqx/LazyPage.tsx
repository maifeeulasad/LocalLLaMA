import React, { lazy, Suspense } from 'react';

const Page1ltbaqx = lazy(() => import('./Page'));

const LazyPage1ltbaqx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltbaqx />
  </Suspense>
);

export { LazyPage1ltbaqx };
