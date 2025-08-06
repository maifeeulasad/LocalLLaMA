import React, { lazy, Suspense } from 'react';

const Page1mieqcb = lazy(() => import('./Page'));

const LazyPage1mieqcb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mieqcb />
  </Suspense>
);

export { LazyPage1mieqcb };
