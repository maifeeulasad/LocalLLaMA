import React, { lazy, Suspense } from 'react';

const Page1md93bj = lazy(() => import('./Page'));

const LazyPage1md93bj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md93bj />
  </Suspense>
);

export { LazyPage1md93bj };
