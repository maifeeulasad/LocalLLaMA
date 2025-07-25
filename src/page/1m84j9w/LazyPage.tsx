import React, { lazy, Suspense } from 'react';

const Page1m84j9w = lazy(() => import('./Page'));

const LazyPage1m84j9w = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m84j9w />
  </Suspense>
);

export { LazyPage1m84j9w };
