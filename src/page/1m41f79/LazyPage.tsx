import React, { lazy, Suspense } from 'react';

const Page1m41f79 = lazy(() => import('./Page'));

const LazyPage1m41f79 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m41f79 />
  </Suspense>
);

export { LazyPage1m41f79 };
