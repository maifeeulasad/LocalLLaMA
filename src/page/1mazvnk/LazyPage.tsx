import React, { lazy, Suspense } from 'react';

const Page1mazvnk = lazy(() => import('./Page'));

const LazyPage1mazvnk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mazvnk />
  </Suspense>
);

export { LazyPage1mazvnk };
