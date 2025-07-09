import React, { lazy, Suspense } from 'react';

const Page1lv53nn = lazy(() => import('./Page'));

const LazyPage1lv53nn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lv53nn />
  </Suspense>
);

export { LazyPage1lv53nn };
