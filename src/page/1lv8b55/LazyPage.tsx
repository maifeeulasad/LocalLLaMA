import React, { lazy, Suspense } from 'react';

const Page1lv8b55 = lazy(() => import('./Page'));

const LazyPage1lv8b55 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lv8b55 />
  </Suspense>
);

export { LazyPage1lv8b55 };
