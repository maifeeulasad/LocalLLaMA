import React, { lazy, Suspense } from 'react';

const Page1mkbimk = lazy(() => import('./Page'));

const LazyPage1mkbimk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkbimk />
  </Suspense>
);

export { LazyPage1mkbimk };
