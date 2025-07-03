import React, { lazy, Suspense } from 'react';

const Page1lppxs2 = lazy(() => import('./Page'));

const LazyPage1lppxs2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lppxs2 />
  </Suspense>
);

export { LazyPage1lppxs2 };
