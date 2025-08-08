import React, { lazy, Suspense } from 'react';

const Page1mk9lu4 = lazy(() => import('./Page'));

const LazyPage1mk9lu4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk9lu4 />
  </Suspense>
);

export { LazyPage1mk9lu4 };
