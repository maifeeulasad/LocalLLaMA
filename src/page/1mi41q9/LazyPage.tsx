import React, { lazy, Suspense } from 'react';

const Page1mi41q9 = lazy(() => import('./Page'));

const LazyPage1mi41q9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi41q9 />
  </Suspense>
);

export { LazyPage1mi41q9 };
