import React, { lazy, Suspense } from 'react';

const Page1mghw96 = lazy(() => import('./Page'));

const LazyPage1mghw96 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mghw96 />
  </Suspense>
);

export { LazyPage1mghw96 };
