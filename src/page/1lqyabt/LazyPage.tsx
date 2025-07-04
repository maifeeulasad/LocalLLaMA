import React, { lazy, Suspense } from 'react';

const Page1lqyabt = lazy(() => import('./Page'));

const LazyPage1lqyabt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqyabt />
  </Suspense>
);

export { LazyPage1lqyabt };
