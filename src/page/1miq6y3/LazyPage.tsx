import React, { lazy, Suspense } from 'react';

const Page1miq6y3 = lazy(() => import('./Page'));

const LazyPage1miq6y3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miq6y3 />
  </Suspense>
);

export { LazyPage1miq6y3 };
