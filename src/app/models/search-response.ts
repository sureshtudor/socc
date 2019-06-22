interface SearchResponse {
    id: number;
    invitationId: number;
    referenceId: string;
    loanNumber?: number;
    firstName: string;
    lastName: string;
    dob: string;
    street: string;
    city: string;
    state: string;
    zipcode: number;
    phone: string;
    date: string;
    appOrPrescreen: string;
    brand: string;
}