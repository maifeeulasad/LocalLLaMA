import React, { lazy, Suspense } from 'react';

const Page1ltfwjv = lazy(() => import('./Page'));

const LazyPage1ltfwjv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltfwjv />
  </Suspense>
);

export { LazyPage1ltfwjv };
