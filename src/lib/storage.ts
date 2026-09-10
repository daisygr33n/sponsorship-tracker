import type { Company } from '../types';

const STORAGE_KEY = 'css-sponsorship-tracker/companies';

export function loadCompanies(): Company[] {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === null) return [];

        const parsed = JSON.parse(stored);
        if (!Array.isArray(parsed)) return [];

        return parsed as Company[];
    } catch {
        return [];
    }
    }

export function saveCompanies(companies: Company[]): void {
    try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(companies));
    } catch (error){
        console.error('Failed to save companies', error);
    }
}