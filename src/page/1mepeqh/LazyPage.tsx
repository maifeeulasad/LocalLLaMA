import React, { lazy, Suspense } from 'react';

const Page1mepeqh = lazy(() => import('./Page'));

const LazyPage1mepeqh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mepeqh />
  </Suspense>
);

export { LazyPage1mepeqh };
