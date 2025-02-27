export type User = { 
    id: string, 
    name: string, 
    email: string, 
    password: string,
    loggedUser?: string
};

export type userListItem = {
    name: string;
    href: string;
  }