import React, { lazy, Suspense } from 'react';

const Page1mf3nw4 = lazy(() => import('./Page'));

const LazyPage1mf3nw4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf3nw4 />
  </Suspense>
);

export { LazyPage1mf3nw4 };
