export interface LoginState {
  id: number,
  name: string,
  surname: string,
  isLoggedIn: boolean,
  isAdmin: boolean,
  status: MovingStatus,
  reset: () => void
}

enum MovingStatus {
  Demenageur,
  Client
} 