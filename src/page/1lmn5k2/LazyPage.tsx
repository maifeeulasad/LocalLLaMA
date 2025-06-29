import React, { lazy, Suspense } from 'react';

const Page1lmn5k2 = lazy(() => import('./Page'));

const LazyPage1lmn5k2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmn5k2 />
  </Suspense>
);

export { LazyPage1lmn5k2 };
