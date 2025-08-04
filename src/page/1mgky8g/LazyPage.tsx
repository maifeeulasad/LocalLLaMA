import React, { lazy, Suspense } from 'react';

const Page1mgky8g = lazy(() => import('./Page'));

const LazyPage1mgky8g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgky8g />
  </Suspense>
);

export { LazyPage1mgky8g };
