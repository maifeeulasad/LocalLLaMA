import React, { lazy, Suspense } from 'react';

const Page1mk221s = lazy(() => import('./Page'));

const LazyPage1mk221s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk221s />
  </Suspense>
);

export { LazyPage1mk221s };
