import React, { lazy, Suspense } from 'react';

const Page1m94ls2 = lazy(() => import('./Page'));

const LazyPage1m94ls2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m94ls2 />
  </Suspense>
);

export { LazyPage1m94ls2 };
