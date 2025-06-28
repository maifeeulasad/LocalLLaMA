import React, { lazy, Suspense } from 'react';

const Page1lm58q1 = lazy(() => import('./Page'));

const LazyPage1lm58q1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lm58q1 />
  </Suspense>
);

export { LazyPage1lm58q1 };
