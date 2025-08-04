import React, { lazy, Suspense } from 'react';

const Page1mh0ltj = lazy(() => import('./Page'));

const LazyPage1mh0ltj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mh0ltj />
  </Suspense>
);

export { LazyPage1mh0ltj };
