import React, { lazy, Suspense } from 'react';

const Page1jsshhe = lazy(() => import('./Page'));

const LazyPage1jsshhe = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1jsshhe />
  </Suspense>
);

export { LazyPage1jsshhe };
