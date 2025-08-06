import React, { lazy, Suspense } from 'react';

const Page1mik5gy = lazy(() => import('./Page'));

const LazyPage1mik5gy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mik5gy />
  </Suspense>
);

export { LazyPage1mik5gy };
