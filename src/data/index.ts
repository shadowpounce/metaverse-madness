import { IInsight, IWorld } from './interfaces'
import i1 from '/images/i1.png'
import i2 from '/images/i2.png'
import i3 from '/images/i3.png'
import w1 from '/images/world1.jpg'
import w2 from '/images/world2.jpg'
import w3 from '/images/world3.jpg'
import w4 from '/images/world4.jpg'
import w5 from '/images/world5.jpg'
import discordIco from '/images/discord.svg'
import instagramIco from '/images/instagram.svg'
import twitterIco from '/images/twitter.svg'
import redditIco from '/images/reddit.svg'

const insightsData: IInsight[] = [
  {
    title: 'The launch of the Metaverse makes Elon musk ketar-ketir',
    subtitle:
      'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
    thumbnail: i1,
  },
  {
    title: '7 tips to easily master the madness of the Metaverse',
    subtitle:
      'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
    thumbnail: i2,
  },
  {
    title: 'With one platform you can explore the whole world virtually',
    subtitle:
      'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
    thumbnail: i3,
  },
]

const worldsData: IWorld[] = [
  {
    name: 'The Hogwarts',
    usersJoined: 304,
    thumbnail: w1,
  },
  {
    name: 'The Upside Down',
    usersJoined: 198,
    thumbnail: w2,
  },
  {
    name: 'Kadirojo Permai',
    usersJoined: 204,
    thumbnail: w3,
  },
  {
    name: 'Paradise Island',
    usersJoined: 221,
    thumbnail: w4,
  },
  {
    name: 'Hawkins Labs',
    usersJoined: 297,
    thumbnail: w5,
  },
]

const socialLinks = [
  {
    href: 'https://discord.com',
    icon: discordIco,
  },
  {
    href: 'https://reddit.com',
    icon: redditIco,
  },
  {
    href: 'https://twitter.com',
    icon: twitterIco,
  },
  {
    href: 'https://instagram.com',
    icon: instagramIco,
  },
]

export { insightsData, worldsData, socialLinks }
