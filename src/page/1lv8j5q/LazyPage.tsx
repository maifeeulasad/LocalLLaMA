import React, { lazy, Suspense } from 'react';

const Page1lv8j5q = lazy(() => import('./Page'));

const LazyPage1lv8j5q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lv8j5q />
  </Suspense>
);

export { LazyPage1lv8j5q };
