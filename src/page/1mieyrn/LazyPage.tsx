import React, { lazy, Suspense } from 'react';

const Page1mieyrn = lazy(() => import('./Page'));

const LazyPage1mieyrn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mieyrn />
  </Suspense>
);

export { LazyPage1mieyrn };
