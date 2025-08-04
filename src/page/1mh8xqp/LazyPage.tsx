import React, { lazy, Suspense } from 'react';

const Page1mh8xqp = lazy(() => import('./Page'));

const LazyPage1mh8xqp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mh8xqp />
  </Suspense>
);

export { LazyPage1mh8xqp };
