import React, { lazy, Suspense } from 'react';

const Page1m7sspe = lazy(() => import('./Page'));

const LazyPage1m7sspe = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7sspe />
  </Suspense>
);

export { LazyPage1m7sspe };
