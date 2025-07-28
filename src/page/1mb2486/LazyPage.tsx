import React, { lazy, Suspense } from 'react';

const Page1mb2486 = lazy(() => import('./Page'));

const LazyPage1mb2486 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mb2486 />
  </Suspense>
);

export { LazyPage1mb2486 };
