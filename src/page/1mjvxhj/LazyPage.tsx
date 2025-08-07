import React, { lazy, Suspense } from 'react';

const Page1mjvxhj = lazy(() => import('./Page'));

const LazyPage1mjvxhj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjvxhj />
  </Suspense>
);

export { LazyPage1mjvxhj };
