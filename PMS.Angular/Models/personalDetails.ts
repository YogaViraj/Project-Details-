
import { Language } from "./language";
import { BreakDuration } from "./breakduration";
import { SocialMedia } from "./socialMedia";
import { User } from "./user";

export interface PersonalDetails {
    personalDetailsId: number;
    name: string;
    objective: string;
    dateOfBirth: string;
    nationality: string;
    mailAddress: string;
    dateOfJoining: string;
    languageid: number;
    breakDurationid: number;
    socialmediaid: number;

    
    createdOn: string | null;
    createdBy: number | null;
    updatedOn: string | null;
    updatedBy: number | null;
    userId: number;
    language: Language | null;
    breakDuration: BreakDuration | null;
    socialmedia: SocialMedia | null;
    // education: Education[] | null;
    // projects: Projects[] | null;
    // skills: Skills[] | null;
    users: User | null;
    isActive: boolean;
}