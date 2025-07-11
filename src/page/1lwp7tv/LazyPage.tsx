import React, { lazy, Suspense } from 'react';

const Page1lwp7tv = lazy(() => import('./Page'));

const LazyPage1lwp7tv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwp7tv />
  </Suspense>
);

export { LazyPage1lwp7tv };
