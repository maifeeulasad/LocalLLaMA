import React, { lazy, Suspense } from 'react';

const Page1lpqyra = lazy(() => import('./Page'));

const LazyPage1lpqyra = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpqyra />
  </Suspense>
);

export { LazyPage1lpqyra };
