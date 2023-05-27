interface IInsight {
  title: string
  subtitle: string
  thumbnail: string
}

interface IWorld {
  name: string
  usersJoined: number
  thumbnail: string
}

export { type IWorld, type IInsight }
