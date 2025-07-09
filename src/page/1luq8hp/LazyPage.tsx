import React, { lazy, Suspense } from 'react';

const Page1luq8hp = lazy(() => import('./Page'));

const LazyPage1luq8hp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luq8hp />
  </Suspense>
);

export { LazyPage1luq8hp };
