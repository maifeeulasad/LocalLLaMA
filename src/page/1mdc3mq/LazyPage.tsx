import React, { lazy, Suspense } from 'react';

const Page1mdc3mq = lazy(() => import('./Page'));

const LazyPage1mdc3mq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdc3mq />
  </Suspense>
);

export { LazyPage1mdc3mq };
