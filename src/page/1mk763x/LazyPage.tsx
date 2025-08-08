import React, { lazy, Suspense } from 'react';

const Page1mk763x = lazy(() => import('./Page'));

const LazyPage1mk763x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk763x />
  </Suspense>
);

export { LazyPage1mk763x };
