export interface LoginState {
  id: number,
  name: string,
  surname: string,
  isLoggedIn: boolean,
  isAdmin: boolean,
  status: MovingStatus,
  showModal: boolean,
  reset: () => void
}

enum MovingStatus {
  Demenageur,
  Client
} 