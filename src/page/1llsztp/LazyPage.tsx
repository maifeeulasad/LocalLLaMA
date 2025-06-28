import React, { lazy, Suspense } from 'react';

const Page1llsztp = lazy(() => import('./Page'));

const LazyPage1llsztp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1llsztp />
  </Suspense>
);

export { LazyPage1llsztp };
