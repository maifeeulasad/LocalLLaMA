import React, { lazy, Suspense } from 'react';

const Page1mja233 = lazy(() => import('./Page'));

const LazyPage1mja233 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mja233 />
  </Suspense>
);

export { LazyPage1mja233 };
