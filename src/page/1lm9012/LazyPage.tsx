import React, { lazy, Suspense } from 'react';

const Page1lm9012 = lazy(() => import('./Page'));

const LazyPage1lm9012 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lm9012 />
  </Suspense>
);

export { LazyPage1lm9012 };
