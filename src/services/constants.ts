export const URL_PATHS = {
    login: 'login',
    forgot_password: 'forgot-password',
    reset_password: 'reset-password/',
    users: 'users/',
    userRegister: 'user-register',
    partnerRegistration: 'partner-registration',
    partnerManagerRegistration: 'partner-manager-registration',
    store: 'store/',
    currencies: 'currencies/',
  
    adminManagerRegistration: 'admin-manager-registration',
    courierRegistration: 'courier-registration',
    flowers: 'flowers/',
    flowerTypeColor: 'flower-type-color/',
    flowerTypeColorShade: 'flower-type-color-shade/',
    flowerTypeSize: 'flower-type-size/',
    flowersTypeProperties: 'flowers-type-properties/',
    flowersTypes: 'flowers-types/',
    storePaper: 'store-paper/',
    storeRibbon: 'store-ribbon/',
    storeFlowerTypes: 'store-flower-types/'
  };
  
  export enum USER_TYPES {
    admin = 1,
    admin_manager,
    partner,
    partner_manager,
    courier,
    user
  }
  
  export type Params = {
    limit: number;
    offset?: number;
    name?: string;
  };
  
  export type UserDataProps = {
    email?: string;
    password?: string;
    repeat_password?: string;
    name?: string;
    phone_number?: string;
    language?: string;
    is_active?: boolean;
    id?: number;
    role?: number;
  };
  
  export type UsersProps = {
    values?: UserDataProps;
    params?: Params;
    id?: string;
  };
  
  export type UserInfoProps = {
    data: UserDataProps[];
    loading: boolean;
    count: number;
  };
  