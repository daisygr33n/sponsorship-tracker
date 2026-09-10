export const STATUSES = ['not_contacted', 'emailed', 'follow_up_emailed', 'reply_received', 'secured', 'declined'] as const;
export const CATEGORIES = ['local', 'quant', 'big_tech', 'banking', 'consulting', 'hardware', 'engineering'] as const;

export type Status = typeof STATUSES[number];
export type Category = typeof CATEGORIES[number];

export interface Interaction{
    id:  string;
    date: string;
    note: string;
}

export interface Company{
    id: string;
    name: string;
    category: Category;
    contactPerson?: string;
    contactEmail?: string;
    status: Status;
    amount?: number;
    interactions: Interaction[];
    notes?: string;
}

