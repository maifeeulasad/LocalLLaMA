import React, { lazy, Suspense } from 'react';

const Page1malsci = lazy(() => import('./Page'));

const LazyPage1malsci = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1malsci />
  </Suspense>
);

export { LazyPage1malsci };
