import React, { lazy, Suspense } from 'react';

const Page1m4l1tl = lazy(() => import('./Page'));

const LazyPage1m4l1tl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4l1tl />
  </Suspense>
);

export { LazyPage1m4l1tl };
