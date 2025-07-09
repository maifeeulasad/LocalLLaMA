import React, { lazy, Suspense } from 'react';

const Page1lv85jp = lazy(() => import('./Page'));

const LazyPage1lv85jp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lv85jp />
  </Suspense>
);

export { LazyPage1lv85jp };
