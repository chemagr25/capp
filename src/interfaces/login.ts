export interface Login {
  id: number
  username: string
  email: string
  type: string
  token: string
  roles: string[]
  clientId: number | null
  technicianId: number | null
}

