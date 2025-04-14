export interface Address {
  id?: number;
  referenceId?: number;
  referenceType?: string;
  postcode: string;
  street?: string;
  city?: string;
  telephone?: string;
  latitude?: number;
  longitude?: number;
  propertyCreateDate?: Date;
  buildingUse?: string;
  propertyType?: string;
  createdDate?: Date;
  updatedDate?: Date;
}

interface InstallerUser {
  firstName: string;
  lastName: string;
  email: string;
}

interface Installer {
  id: number;
  user: InstallerUser;
}

export interface Customer {
  id?: number;
  installerId?: number;
  firstName: string;
  lastName: string;
  mobile?: string;
  email?: string;
  createdDate?: Date;
  updatedDate?: Date;
  addresses?: Address[];
  installations?: any[];
  installer?: Installer;
}

export interface CustomerFormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  address: {
    street: string;
    city: string;
    postcode: string;
  };
} 