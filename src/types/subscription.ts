export interface Subscription {
  id: number;
  startDate: Date;
  expiryDate: Date;
  endDate: Date;
  plan: string;
  type: string;
  isActive: boolean;
  createdDate: Date;
  updatedDate: Date;
  createdByUserId: string | null;
  updatedByUserId: string | null;
  daysRemaining?: number;
}

export interface Installer {
  id: number;
  userId: string;
  subscription?: Subscription;
} 