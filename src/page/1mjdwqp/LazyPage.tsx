import React, { lazy, Suspense } from 'react';

const Page1mjdwqp = lazy(() => import('./Page'));

const LazyPage1mjdwqp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjdwqp />
  </Suspense>
);

export { LazyPage1mjdwqp };
