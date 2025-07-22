import React, { lazy, Suspense } from 'react';

const Page1m5owur = lazy(() => import('./Page'));

const LazyPage1m5owur = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5owur />
  </Suspense>
);

export { LazyPage1m5owur };
