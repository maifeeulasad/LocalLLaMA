import React, { lazy, Suspense } from 'react';

const Page1lv1m0i = lazy(() => import('./Page'));

const LazyPage1lv1m0i = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lv1m0i />
  </Suspense>
);

export { LazyPage1lv1m0i };
