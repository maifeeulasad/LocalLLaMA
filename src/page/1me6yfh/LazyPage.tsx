import React, { lazy, Suspense } from 'react';

const Page1me6yfh = lazy(() => import('./Page'));

const LazyPage1me6yfh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me6yfh />
  </Suspense>
);

export { LazyPage1me6yfh };
