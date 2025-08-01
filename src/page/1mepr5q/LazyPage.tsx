import React, { lazy, Suspense } from 'react';

const Page1mepr5q = lazy(() => import('./Page'));

const LazyPage1mepr5q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mepr5q />
  </Suspense>
);

export { LazyPage1mepr5q };
