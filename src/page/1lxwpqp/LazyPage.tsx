import React, { lazy, Suspense } from 'react';

const Page1lxwpqp = lazy(() => import('./Page'));

const LazyPage1lxwpqp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxwpqp />
  </Suspense>
);

export { LazyPage1lxwpqp };
