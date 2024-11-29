export interface User {
  name: string;
  email: string;
  contactNo: string;
  userRole: string;
  address: string;
}

export const mockUsers: User[] = [
  {
    name: 'Admin',
    email: 'admin@codzgarage.com',
    contactNo: '8085863828',
    userRole: 'Admin',
    address: '95 Woodwork Crescent TRUNDING QLD 4874'
  },
  {
    name: 'Daniel Barajas',
    email: 'daniel@reservedataanalysis.org',
    contactNo: '4703786777',
    userRole: 'Manager',
    address: '142 Braxton Dr'
  },
  {
    name: 'Daniel Barajas',
    email: 'dmdesignservices@gmail.com',
    contactNo: '4703786777',
    userRole: 'User',
    address: '142 Braxton Dr'
  }
];