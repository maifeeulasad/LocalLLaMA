import React, { lazy, Suspense } from 'react';

const Page1m43owh = lazy(() => import('./Page'));

const LazyPage1m43owh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m43owh />
  </Suspense>
);

export { LazyPage1m43owh };
