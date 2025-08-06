import React, { lazy, Suspense } from 'react';

const Page1miyysp = lazy(() => import('./Page'));

const LazyPage1miyysp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miyysp />
  </Suspense>
);

export { LazyPage1miyysp };
