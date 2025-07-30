import React, { lazy, Suspense } from 'react';

const Page1mcqrwh = lazy(() => import('./Page'));

const LazyPage1mcqrwh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcqrwh />
  </Suspense>
);

export { LazyPage1mcqrwh };
