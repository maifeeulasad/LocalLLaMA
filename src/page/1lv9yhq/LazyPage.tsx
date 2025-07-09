import React, { lazy, Suspense } from 'react';

const Page1lv9yhq = lazy(() => import('./Page'));

const LazyPage1lv9yhq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lv9yhq />
  </Suspense>
);

export { LazyPage1lv9yhq };
