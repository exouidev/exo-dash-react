export interface PaymentMethod {
  id: string
  type: string
  last4: string
  expiryMonth: string
  expiryYear: string
  isDefault: boolean
}

export interface UserProfile {
  firstName: string
  lastName: string
  email: string
  username: string
  bio: string
  website: string
  location: string
}

export interface UserNotifications {
  product: boolean
  marketing: boolean
}

export interface SettingsData {
  profile: UserProfile
  paymentMethods: PaymentMethod[]
  notifications: UserNotifications
  tfaEnabled: boolean
}

export const fetchSettingsData = async (): Promise<SettingsData> => {
  await new Promise(resolve => setTimeout(resolve, 500));

  return {
    profile: {
      firstName: 'Tom', lastName: 'Developer', email: 'tom@example.com', username: 'tomdev',
      bio: 'Frontend enthusiast building interactive dashboards. Open to collaboration.', website: 'https://react.dev', location: 'San Francisco, CA'
    },
    paymentMethods: [
      { id: 'pm_1', type: 'Visa', last4: '4242', expiryMonth: '12', expiryYear: '2028', isDefault: true }
    ],
    notifications: { product: true, marketing: false },
    tfaEnabled: true
  };
};
