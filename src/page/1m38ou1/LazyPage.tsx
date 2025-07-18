import React, { lazy, Suspense } from 'react';

const Page1m38ou1 = lazy(() => import('./Page'));

const LazyPage1m38ou1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m38ou1 />
  </Suspense>
);

export { LazyPage1m38ou1 };
