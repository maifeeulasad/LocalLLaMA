import React, { lazy, Suspense } from 'react';

const Page1mgo50t = lazy(() => import('./Page'));

const LazyPage1mgo50t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgo50t />
  </Suspense>
);

export { LazyPage1mgo50t };
