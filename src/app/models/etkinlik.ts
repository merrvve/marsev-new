export interface Etkinlik {
        id?: number;
        etkinlikAdi?: string;
        etkinlikTuru?: string;
        etkinlikTipi?: string;
        etkinlikTarihiBaslangic: Date;
        etkinlikTarihiBitis: Date;
        aciklama?: string;
        detayLink?: string | null;
    
}
