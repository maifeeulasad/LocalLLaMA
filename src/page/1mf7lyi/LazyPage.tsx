import React, { lazy, Suspense } from 'react';

const Page1mf7lyi = lazy(() => import('./Page'));

const LazyPage1mf7lyi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf7lyi />
  </Suspense>
);

export { LazyPage1mf7lyi };
