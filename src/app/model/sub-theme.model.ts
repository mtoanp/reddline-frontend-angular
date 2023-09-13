export interface SubTheme {
    id: number
    nom: string
    idParent: number
    subThemes: SubTheme[]
    formations: any[]
}