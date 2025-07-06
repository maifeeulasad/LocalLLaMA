import React, { lazy, Suspense } from 'react';

const Page1lst2uk = lazy(() => import('./Page'));

const LazyPage1lst2uk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lst2uk />
  </Suspense>
);

export { LazyPage1lst2uk };
