import type { AuthenticatorTransportFuture } from "@simplewebauthn/server";

export type StoredPublicKey =
  | Uint8Array
  | ArrayBuffer
  | number[]
  | string
  | { type: "Buffer"; data: number[] }
  | Record<string, number>;

export interface HomeData {
  id: string;
  name: string;
  description: string;
  url?: string;
}

export interface ExperienceData extends HomeData {
  startYear: number;
  endYear?: number;
}

export interface ProjectsData extends HomeData {
  slug: string;
  detail: string;
}

export const CacheTags = {
  ExperienceData: { title: "Experience Data", tag: "experience_data" },
  ProjectsData: { title: "Projects Data", tag: "projects_data" },
  CvLink: { title: "CV Link", tag: "cv_link" },
} as const;

export interface AdminSession {
  id: string;
  expiresAt: Date;
  revokedAt?: Date;
}

export interface AdminPasskey {
  id: string;
  name?: string;
  credentialId: string;
  publicKey: StoredPublicKey;
  counter: number;
  transports: AuthenticatorTransportFuture[];
  deviceType?: string;
  backedUp: boolean;
  lastUsedAt?: Date;
}

export interface AdminChallenge {
  id: string;
  challenge: string;
  kind: "registration" | "authentication";
  expiresAt: Date;
  usedAt?: Date;
}
