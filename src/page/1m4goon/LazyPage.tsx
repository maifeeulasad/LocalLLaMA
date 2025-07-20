import React, { lazy, Suspense } from 'react';

const Page1m4goon = lazy(() => import('./Page'));

const LazyPage1m4goon = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4goon />
  </Suspense>
);

export { LazyPage1m4goon };
