import React, { lazy, Suspense } from 'react';

const Page1lqsod4 = lazy(() => import('./Page'));

const LazyPage1lqsod4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqsod4 />
  </Suspense>
);

export { LazyPage1lqsod4 };
