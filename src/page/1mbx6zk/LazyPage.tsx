import React, { lazy, Suspense } from 'react';

const Page1mbx6zk = lazy(() => import('./Page'));

const LazyPage1mbx6zk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbx6zk />
  </Suspense>
);

export { LazyPage1mbx6zk };
