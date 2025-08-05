import React, { lazy, Suspense } from 'react';

const Page1mhe1rl = lazy(() => import('./Page'));

const LazyPage1mhe1rl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhe1rl />
  </Suspense>
);

export { LazyPage1mhe1rl };
