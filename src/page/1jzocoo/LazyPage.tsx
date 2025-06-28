import React, { lazy, Suspense } from 'react';

const Page1jzocoo = lazy(() => import('./Page'));

const LazyPage1jzocoo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1jzocoo />
  </Suspense>
);

export { LazyPage1jzocoo };
