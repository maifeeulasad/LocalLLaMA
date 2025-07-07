import React, { lazy, Suspense } from 'react';

const Page1lts4q2 = lazy(() => import('./Page'));

const LazyPage1lts4q2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lts4q2 />
  </Suspense>
);

export { LazyPage1lts4q2 };
