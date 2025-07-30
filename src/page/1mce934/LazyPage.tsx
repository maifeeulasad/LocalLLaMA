import React, { lazy, Suspense } from 'react';

const Page1mce934 = lazy(() => import('./Page'));

const LazyPage1mce934 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mce934 />
  </Suspense>
);

export { LazyPage1mce934 };
