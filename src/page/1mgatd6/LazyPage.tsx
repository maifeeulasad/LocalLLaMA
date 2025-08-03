import React, { lazy, Suspense } from 'react';

const Page1mgatd6 = lazy(() => import('./Page'));

const LazyPage1mgatd6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgatd6 />
  </Suspense>
);

export { LazyPage1mgatd6 };
