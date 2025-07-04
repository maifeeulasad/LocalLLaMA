import React, { lazy, Suspense } from 'react';

const Page1lqtu1t = lazy(() => import('./Page'));

const LazyPage1lqtu1t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqtu1t />
  </Suspense>
);

export { LazyPage1lqtu1t };
