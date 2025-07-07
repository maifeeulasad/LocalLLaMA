import React, { lazy, Suspense } from 'react';

const Page1ltl6ui = lazy(() => import('./Page'));

const LazyPage1ltl6ui = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltl6ui />
  </Suspense>
);

export { LazyPage1ltl6ui };
