import React, { lazy, Suspense } from 'react';

const Page1mck6o7 = lazy(() => import('./Page'));

const LazyPage1mck6o7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mck6o7 />
  </Suspense>
);

export { LazyPage1mck6o7 };
