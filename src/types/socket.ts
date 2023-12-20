interface PlayerCard {
  username: string;
  memeCardId: number;
}

export interface ServerToClientEvents {
  "message-received": ({ message }: { message: string }) => void;
  "game-started": () => void;
  "round-over": ({ playersCard }: { playersCard: PlayerCard[] }) => void;
  "round-winner": ({ winner }: { winner: string }) => void;
  "round-started": () => void;
  "game-over": ({ winner }: { winner: string }) => void;
}

export interface ClientToServerEvents {
  "join-room": ({ room }: { room: string }) => void;
  "message-sent": ({ message, room }: { message: string, room: string }) => void;
  "disconnected": () => void;
  "game-start": ({ room }: { room: string }) => void;
  "player-choice": ({ room, username, memeCardId }: { room: string, username: string, memeCardId: number }) => void;
  "player-vote": ({ room, username }: { room: string, username: string }) => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  name: string;
  age: number;
}