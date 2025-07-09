import React, { lazy, Suspense } from 'react';

const Page1lv1z7b = lazy(() => import('./Page'));

const LazyPage1lv1z7b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lv1z7b />
  </Suspense>
);

export { LazyPage1lv1z7b };
