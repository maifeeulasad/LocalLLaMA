import React, { lazy, Suspense } from 'react';

const Page1mjxyqp = lazy(() => import('./Page'));

const LazyPage1mjxyqp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjxyqp />
  </Suspense>
);

export { LazyPage1mjxyqp };
