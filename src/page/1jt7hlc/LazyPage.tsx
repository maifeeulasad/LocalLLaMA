import React, { lazy, Suspense } from 'react';

const Page1jt7hlc = lazy(() => import('./Page'));

const LazyPage1jt7hlc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1jt7hlc />
  </Suspense>
);

export { LazyPage1jt7hlc };
