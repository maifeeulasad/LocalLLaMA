import React, { lazy, Suspense } from 'react';

const Page1luf8d1 = lazy(() => import('./Page'));

const LazyPage1luf8d1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luf8d1 />
  </Suspense>
);

export { LazyPage1luf8d1 };
