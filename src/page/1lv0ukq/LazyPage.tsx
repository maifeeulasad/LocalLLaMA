import React, { lazy, Suspense } from 'react';

const Page1lv0ukq = lazy(() => import('./Page'));

const LazyPage1lv0ukq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lv0ukq />
  </Suspense>
);

export { LazyPage1lv0ukq };
