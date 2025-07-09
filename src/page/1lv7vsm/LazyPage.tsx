import React, { lazy, Suspense } from 'react';

const Page1lv7vsm = lazy(() => import('./Page'));

const LazyPage1lv7vsm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lv7vsm />
  </Suspense>
);

export { LazyPage1lv7vsm };
