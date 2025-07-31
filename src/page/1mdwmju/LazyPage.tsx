import React, { lazy, Suspense } from 'react';

const Page1mdwmju = lazy(() => import('./Page'));

const LazyPage1mdwmju = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdwmju />
  </Suspense>
);

export { LazyPage1mdwmju };
