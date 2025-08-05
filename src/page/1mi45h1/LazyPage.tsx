import React, { lazy, Suspense } from 'react';

const Page1mi45h1 = lazy(() => import('./Page'));

const LazyPage1mi45h1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi45h1 />
  </Suspense>
);

export { LazyPage1mi45h1 };
