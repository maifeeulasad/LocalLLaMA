import React, { lazy, Suspense } from 'react';

const Page1miij6j = lazy(() => import('./Page'));

const LazyPage1miij6j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miij6j />
  </Suspense>
);

export { LazyPage1miij6j };
