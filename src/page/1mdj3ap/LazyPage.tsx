import React, { lazy, Suspense } from 'react';

const Page1mdj3ap = lazy(() => import('./Page'));

const LazyPage1mdj3ap = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdj3ap />
  </Suspense>
);

export { LazyPage1mdj3ap };
