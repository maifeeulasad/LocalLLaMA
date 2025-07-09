import React, { lazy, Suspense } from 'react';

const Page1lv9m3j = lazy(() => import('./Page'));

const LazyPage1lv9m3j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lv9m3j />
  </Suspense>
);

export { LazyPage1lv9m3j };
