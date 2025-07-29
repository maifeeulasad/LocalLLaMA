import React, { lazy, Suspense } from 'react';

const Page1mbpoy9 = lazy(() => import('./Page'));

const LazyPage1mbpoy9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbpoy9 />
  </Suspense>
);

export { LazyPage1mbpoy9 };
