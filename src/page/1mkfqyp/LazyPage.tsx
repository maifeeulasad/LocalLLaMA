import React, { lazy, Suspense } from 'react';

const Page1mkfqyp = lazy(() => import('./Page'));

const LazyPage1mkfqyp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkfqyp />
  </Suspense>
);

export { LazyPage1mkfqyp };
