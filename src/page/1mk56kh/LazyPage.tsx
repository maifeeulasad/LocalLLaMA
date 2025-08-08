import React, { lazy, Suspense } from 'react';

const Page1mk56kh = lazy(() => import('./Page'));

const LazyPage1mk56kh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk56kh />
  </Suspense>
);

export { LazyPage1mk56kh };
