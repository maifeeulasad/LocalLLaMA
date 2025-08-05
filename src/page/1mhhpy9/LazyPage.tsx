import React, { lazy, Suspense } from 'react';

const Page1mhhpy9 = lazy(() => import('./Page'));

const LazyPage1mhhpy9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhhpy9 />
  </Suspense>
);

export { LazyPage1mhhpy9 };
