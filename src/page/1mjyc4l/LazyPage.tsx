import React, { lazy, Suspense } from 'react';

const Page1mjyc4l = lazy(() => import('./Page'));

const LazyPage1mjyc4l = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjyc4l />
  </Suspense>
);

export { LazyPage1mjyc4l };
