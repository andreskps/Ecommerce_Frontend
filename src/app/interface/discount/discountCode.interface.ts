export interface DiscountCode {
    id: number;
    code: string;
    percentage: number;
    minimumAmount: number;
    isActive: boolean;
    expiresAt: string;
    startsAt: string;
  }