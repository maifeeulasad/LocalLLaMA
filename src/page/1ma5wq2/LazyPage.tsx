import React, { lazy, Suspense } from 'react';

const Page1ma5wq2 = lazy(() => import('./Page'));

const LazyPage1ma5wq2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ma5wq2 />
  </Suspense>
);

export { LazyPage1ma5wq2 };
