import React, { lazy, Suspense } from 'react';

const Page1lljdk8 = lazy(() => import('./Page'));

const LazyPage1lljdk8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lljdk8 />
  </Suspense>
);

export { LazyPage1lljdk8 };
