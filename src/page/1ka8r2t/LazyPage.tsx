import React, { lazy, Suspense } from 'react';

const Page1ka8r2t = lazy(() => import('./Page'));

const LazyPage1ka8r2t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ka8r2t />
  </Suspense>
);

export { LazyPage1ka8r2t };
