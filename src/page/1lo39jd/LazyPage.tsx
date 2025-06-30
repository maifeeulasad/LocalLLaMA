import React, { lazy, Suspense } from 'react';

const Page1lo39jd = lazy(() => import('./Page'));

const LazyPage1lo39jd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lo39jd />
  </Suspense>
);

export { LazyPage1lo39jd };
