import React, { lazy, Suspense } from 'react';

const Page1m36d91 = lazy(() => import('./Page'));

const LazyPage1m36d91 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m36d91 />
  </Suspense>
);

export { LazyPage1m36d91 };
