import React, { lazy, Suspense } from 'react';

const Page1lvi022 = lazy(() => import('./Page'));

const LazyPage1lvi022 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvi022 />
  </Suspense>
);

export { LazyPage1lvi022 };
