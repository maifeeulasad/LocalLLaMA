import React, { lazy, Suspense } from 'react';

const Page1lxg042 = lazy(() => import('./Page'));

const LazyPage1lxg042 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxg042 />
  </Suspense>
);

export { LazyPage1lxg042 };
