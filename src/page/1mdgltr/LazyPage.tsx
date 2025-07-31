import React, { lazy, Suspense } from 'react';

const Page1mdgltr = lazy(() => import('./Page'));

const LazyPage1mdgltr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdgltr />
  </Suspense>
);

export { LazyPage1mdgltr };
