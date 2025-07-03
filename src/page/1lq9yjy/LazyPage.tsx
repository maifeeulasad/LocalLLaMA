import React, { lazy, Suspense } from 'react';

const Page1lq9yjy = lazy(() => import('./Page'));

const LazyPage1lq9yjy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lq9yjy />
  </Suspense>
);

export { LazyPage1lq9yjy };
