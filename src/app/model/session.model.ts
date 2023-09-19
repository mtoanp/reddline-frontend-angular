export interface Session {
    id: number
    dateDeDebut: string
    dateDeFin: string
    capacite: number
    idFormation: number
    nbEtudiants: number
    etudiants: any[]
    candidats: any[]
    coursList: any[]
    formation: any
}