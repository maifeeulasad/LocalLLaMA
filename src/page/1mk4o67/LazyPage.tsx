import React, { lazy, Suspense } from 'react';

const Page1mk4o67 = lazy(() => import('./Page'));

const LazyPage1mk4o67 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk4o67 />
  </Suspense>
);

export { LazyPage1mk4o67 };
