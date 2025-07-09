import React, { lazy, Suspense } from 'react';

const Page1lv8cje = lazy(() => import('./Page'));

const LazyPage1lv8cje = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lv8cje />
  </Suspense>
);

export { LazyPage1lv8cje };
