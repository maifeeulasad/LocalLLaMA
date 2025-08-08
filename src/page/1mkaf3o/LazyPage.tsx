import React, { lazy, Suspense } from 'react';

const Page1mkaf3o = lazy(() => import('./Page'));

const LazyPage1mkaf3o = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkaf3o />
  </Suspense>
);

export { LazyPage1mkaf3o };
