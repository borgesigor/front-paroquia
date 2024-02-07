interface Items{
  image?: string,
  icon?: string,
  title: string,
  description?: string,
  path: string
}

export interface IDropdown{
  items?: Array<Items>
  cards?: Array<Items>
}

export interface IMenuElement{
  menu: string,
  path: string,
  dropdown?: IDropdown
}

export const MenuArray: Array<IMenuElement> = [
  {
    menu: 'Inicio',
    path: '/',
  },
  {
    menu: 'Meditação',
    path: '/',
  },
  {
    menu: 'Pastorais',
    path: '/',
    dropdown: {
      cards: [
        {
          title: 'Faça parte de uma pastoral de nossa comunidade',
          path: '',
          image: 'https://images.pexels.com/photos/6647015/pexels-photo-6647015.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
          title: 'Pastoral do Dízimo',
          path: '',
          image: 'https://images.pexels.com/photos/750792/pexels-photo-750792.jpeg?auto=compress&cs=tinysrgb&w=600',
        }
      ],
      items: [
        {
          path: '',
          title: 'Pastoral da Comunicação',
          description: 'Comunicando a fé com amor!',
          icon: 'church'
        },
        {
          path: '',
          title: 'Pascom',
          description: 'Isso aí',
          icon: 'church'
        }
      ]
    }
  },
  {
    menu: 'Acervo',
    path: '/',
    dropdown: {
      cards: [
        {
          title: 'Galeria',
          path: '',
          image: 'https://images.pexels.com/photos/265946/pexels-photo-265946.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
          title: 'Cifras & Letras',
          path: '',
          image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
          title: 'Missas Gravadas',
          path: '',
          image: 'https://images.pexels.com/photos/236339/pexels-photo-236339.jpeg?auto=compress&cs=tinysrgb&w=600',
        }
      ]
    },
  }
]