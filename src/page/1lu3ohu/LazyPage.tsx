import React, { lazy, Suspense } from 'react';

const Page1lu3ohu = lazy(() => import('./Page'));

const LazyPage1lu3ohu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lu3ohu />
  </Suspense>
);

export { LazyPage1lu3ohu };
