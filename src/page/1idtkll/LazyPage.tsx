import React, { lazy, Suspense } from 'react';

const Page1idtkll = lazy(() => import('./Page'));

const LazyPage1idtkll = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1idtkll />
  </Suspense>
);

export { LazyPage1idtkll };
