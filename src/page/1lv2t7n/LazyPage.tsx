import React, { lazy, Suspense } from 'react';

const Page1lv2t7n = lazy(() => import('./Page'));

const LazyPage1lv2t7n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lv2t7n />
  </Suspense>
);

export { LazyPage1lv2t7n };
