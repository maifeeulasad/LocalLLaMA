import React, { lazy, Suspense } from 'react';

const Page1lp6925 = lazy(() => import('./Page'));

const LazyPage1lp6925 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lp6925 />
  </Suspense>
);

export { LazyPage1lp6925 };
