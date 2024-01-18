// Use this file to export React client components (e.g. those with 'use client' directive) or other non-server utilities

export * from './lib/fr-state';
export * from "./slice"
export * from "./nextStore"

export interface Response<T> {
  error: string | null;
  data: T;
  loader: boolean;
}

