import React, { lazy, Suspense } from 'react';

const Page1ltw5lh = lazy(() => import('./Page'));

const LazyPage1ltw5lh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltw5lh />
  </Suspense>
);

export { LazyPage1ltw5lh };
