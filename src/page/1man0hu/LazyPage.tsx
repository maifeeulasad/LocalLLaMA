import React, { lazy, Suspense } from 'react';

const Page1man0hu = lazy(() => import('./Page'));

const LazyPage1man0hu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1man0hu />
  </Suspense>
);

export { LazyPage1man0hu };
