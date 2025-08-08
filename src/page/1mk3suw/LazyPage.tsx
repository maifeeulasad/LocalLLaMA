import React, { lazy, Suspense } from 'react';

const Page1mk3suw = lazy(() => import('./Page'));

const LazyPage1mk3suw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk3suw />
  </Suspense>
);

export { LazyPage1mk3suw };
