import React, { lazy, Suspense } from 'react';

const Page1m9woxb = lazy(() => import('./Page'));

const LazyPage1m9woxb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9woxb />
  </Suspense>
);

export { LazyPage1m9woxb };
