export interface CatalogoInterface{
    id: string;
    url: string;
    large_url?: string;
    source_id?: string;
}

export interface CatalogoResponseInterface{
    images: any;
    id: string;
    url: string;
    large_url: string;
    source_id: string;
}