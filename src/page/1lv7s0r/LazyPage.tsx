import React, { lazy, Suspense } from 'react';

const Page1lv7s0r = lazy(() => import('./Page'));

const LazyPage1lv7s0r = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lv7s0r />
  </Suspense>
);

export { LazyPage1lv7s0r };
