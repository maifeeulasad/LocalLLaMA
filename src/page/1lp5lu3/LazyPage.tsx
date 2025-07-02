import React, { lazy, Suspense } from 'react';

const Page1lp5lu3 = lazy(() => import('./Page'));

const LazyPage1lp5lu3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lp5lu3 />
  </Suspense>
);

export { LazyPage1lp5lu3 };
