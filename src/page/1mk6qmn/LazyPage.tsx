import React, { lazy, Suspense } from 'react';

const Page1mk6qmn = lazy(() => import('./Page'));

const LazyPage1mk6qmn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk6qmn />
  </Suspense>
);

export { LazyPage1mk6qmn };
