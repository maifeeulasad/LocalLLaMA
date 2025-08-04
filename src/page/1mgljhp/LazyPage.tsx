import React, { lazy, Suspense } from 'react';

const Page1mgljhp = lazy(() => import('./Page'));

const LazyPage1mgljhp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgljhp />
  </Suspense>
);

export { LazyPage1mgljhp };
