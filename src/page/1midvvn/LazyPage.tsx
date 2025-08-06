import React, { lazy, Suspense } from 'react';

const Page1midvvn = lazy(() => import('./Page'));

const LazyPage1midvvn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1midvvn />
  </Suspense>
);

export { LazyPage1midvvn };
