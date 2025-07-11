import React, { lazy, Suspense } from 'react';

const Page1lwp7e5 = lazy(() => import('./Page'));

const LazyPage1lwp7e5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwp7e5 />
  </Suspense>
);

export { LazyPage1lwp7e5 };
