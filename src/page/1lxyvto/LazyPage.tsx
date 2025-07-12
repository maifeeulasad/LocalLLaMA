import React, { lazy, Suspense } from 'react';

const Page1lxyvto = lazy(() => import('./Page'));

const LazyPage1lxyvto = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxyvto />
  </Suspense>
);

export { LazyPage1lxyvto };
