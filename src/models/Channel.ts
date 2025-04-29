export interface Channel {
    id: string;
    name: string;
    isPrivate: boolean;
    memberIds: string[];
}