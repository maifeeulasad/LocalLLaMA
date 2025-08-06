import React, { lazy, Suspense } from 'react';

const Page1miov4l = lazy(() => import('./Page'));

const LazyPage1miov4l = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miov4l />
  </Suspense>
);

export { LazyPage1miov4l };
