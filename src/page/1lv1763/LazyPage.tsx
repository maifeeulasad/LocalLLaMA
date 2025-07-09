import React, { lazy, Suspense } from 'react';

const Page1lv1763 = lazy(() => import('./Page'));

const LazyPage1lv1763 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lv1763 />
  </Suspense>
);

export { LazyPage1lv1763 };
