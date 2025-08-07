import React, { lazy, Suspense } from 'react';

const Page1mjxmqj = lazy(() => import('./Page'));

const LazyPage1mjxmqj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjxmqj />
  </Suspense>
);

export { LazyPage1mjxmqj };
