import React, { lazy, Suspense } from 'react';

const Page1mkd0bk = lazy(() => import('./Page'));

const LazyPage1mkd0bk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkd0bk />
  </Suspense>
);

export { LazyPage1mkd0bk };
